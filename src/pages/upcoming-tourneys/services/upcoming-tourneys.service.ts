import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IUpcomingTourneys } from "src/app/types/types";
import { API } from "src/shared/const/api";

@Injectable()
export class UpcomingTourneysService {
    constructor(private http: HttpClient) {}

    getUpcomingTourneys() {
        return this.http.get<IUpcomingTourneys[]>(`${API}/upcoming-tourneys`)
    }
}