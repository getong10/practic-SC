import { Component, OnInit } from "@angular/core";

import { UpcomingTourneysService } from "../services/upcoming-tourneys.service";
import { IUpcomingTourneys } from "src/app/types/types";

@Component({
    selector: 'app-upcoming-tourneys-page',
    templateUrl: './upcoming-tourneys-page.component.html',
    styleUrls: ['./upcoming-tourneys-page.component.scss'],
    providers: [UpcomingTourneysService],
})
export class UpcomingTourneysPageComponent implements OnInit {
    constructor(private upcomingTourneysService: UpcomingTourneysService) {}

    upcomingTourneys: IUpcomingTourneys[] = []

    ngOnInit(): void {
        this.upcomingTourneysService.getUpcomingTourneys().subscribe(response => this.upcomingTourneys = response)
    }
}