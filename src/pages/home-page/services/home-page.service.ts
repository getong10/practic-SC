import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { API } from "src/shared/const/api";
import { IHomeData } from "../types/home";

@Injectable()
export class HomePageSerivce {
    constructor(private http: HttpClient) {}

    getHomeData() {
        return this.http.get<IHomeData>(`${API}/home`);
    }
}