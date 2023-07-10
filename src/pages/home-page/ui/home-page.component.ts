import { Component, OnInit } from '@angular/core';

import { IHomeData } from '../types/home';
import { HomePageSerivce } from '../services/home-page.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    providers: [HomePageSerivce],
})
export class HomePageComponent implements OnInit {
    constructor(private homePageSerivce: HomePageSerivce) {}

    isMenuBtn = true;
    activeSidebar = false;

    homeDataResult: IHomeData = {
        completedTourney: 0,
        upcomingTourney: 0,
        upcomingTourneysArr: []
    }

    ngOnInit(): void {
        this.homePageSerivce.getHomeData().subscribe(response => this.homeDataResult = response)
    }

    toggleMenu(toggle: boolean) {
        this.activeSidebar = toggle;
    }
}