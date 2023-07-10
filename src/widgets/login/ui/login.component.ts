import { Component } from "@angular/core";

import { ILoginBody } from "../types/login";
import { IDataForm } from "src/app/types/types";
import { LoginService } from "../services/login.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService],
})
export class LoginComponent {
    constructor(private loginService: LoginService) {}

    loginBody: ILoginBody = {
        email: '',
        password: '',
    }

    handleEvent(data: IDataForm) {
        this.loginBody[data.name] = data.value;
    }

    sendLogin() {
        this.loginService.postLoginData(this.loginBody).subscribe(
            response => {
                this.loginBody.email = '';
                this.loginBody.password = '';
                return console.log('Пользователь успешно зарегистрирован!', response);
            }
        )
    }
}

// dsabled кнопки при & email & password - false