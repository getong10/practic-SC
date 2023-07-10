import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IUsersData } from "../types/users";
import { API } from "src/shared/const/api";

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getUsersData() {
        return this.http.get<IUsersData>(`${API}/users`);
    }
}