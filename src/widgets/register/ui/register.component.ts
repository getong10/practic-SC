import { Component } from "@angular/core";

import { SelectProps } from "src/shared/select/select.component";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    cities: SelectProps[] = [
        { name: 'Выберите город', value: '' },
        { name: 'Ярославль', value: 'Yaroslavl' },
        { name: 'Самара', value: 'Samara' },
    ];

    schools: SelectProps[] = [
        { name: 'Выберите школу', value: '' },
        { name: 'школа №75', value: 'school75' },
        { name: 'школа №90', value: 'school90' },
    ];

    classSchools: SelectProps[] = [
        { name: 'Выберите класс', value: '' },
        { name: '10б', value: '10b' },
        { name: '8а', value: '8a' },
    ];
}