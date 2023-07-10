import { Component, OnInit } from "@angular/core";

import { SelectProps } from "src/shared/select/select.component";
import { RegisterService } from "../services/register.service";
import { IRegisterBody } from "../types/register";
import { IDataForm } from "src/app/types/types";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [RegisterService],
})
export class RegisterComponent implements OnInit {
    constructor(private registerService: RegisterService) {}

    cities: SelectProps[] = [
        { name: 'Выберите город', value: '' },
    ];

    schools: SelectProps[] = [
        { name: 'Выберите школу', value: '' },
    ];

    classSchools: SelectProps[] = [
        { name: 'Выберите класс', value: '' },
    ];

    disabledStudent = false;
    disabled = true;
    registerStatus = false;
    role = 'student';
    techSupport = false;
    supportMessage = '';

    ngOnInit(): void {
        this.registerService.getRegisterData().subscribe({
            next: (data: any) => {
                this.cities = this.cities.concat(data.cities);
                this.schools = this.schools.concat(data.schools);
                this.classSchools = this.classSchools.concat(data.classSchools);
            }
        })
    }

    registerBody: IRegisterBody = {
        username: '',
        surName: '',
        patronymic: '',
        password: '',
        repeatPassword: '',
        email: '',
        cities: '',
        schools: '',
        classSchools: '',
        getNews: false,
    }

    handleEvent(data: IDataForm) {
        this.registerBody[data.name] = data.value;
    }

    toggleDisabled(roleValue: string) {
        roleValue === 'admin' ? this.disabled = false : this.disabled = true;
        this.role = roleValue;
    }

    closeModal() {
        this.registerStatus = false;
    }

    openSupportModal() {
        this.techSupport = true;
    }

    closeSupportModal() {
        this.registerService.postSupportData(this.supportMessage).subscribe(response => console.log(response))
        this.techSupport = false;
        this.supportMessage = '';
    }

    sendRegister() {
        if (this.role === 'admin') this.registerStatus = true;
        this.registerService.postRegisterData({
            role: this.role,
            data: this.registerBody
        }).subscribe(response => {
            //@ts-ignore
            this.registerBody = Object.fromEntries(
                Object
                    .entries(this.registerBody)
                    .map(([key, value]) => [key, typeof value === 'string' ? '' : false])
            );
            return console.log(response);
        })
    }
}