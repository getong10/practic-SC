import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { API } from "src/shared/const/api";
import { ILoginBody } from "../types/login";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    postLoginData(data: ILoginBody) {
        return this.http.post(`${API}/login`, data);
    }
}