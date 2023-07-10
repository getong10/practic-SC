import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRequestData } from '../types/register';

import { API } from 'src/shared/const/api';

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) { }

    getRegisterData() {
        return this.http.get('assets/user.json');
    }

    postRegisterData(data: IRequestData) {
        return this.http.post(`${API}/register`, data);
    }

    postSupportData(message: string) {
        return this.http.post(`${API}/support`, { message });
    }
}