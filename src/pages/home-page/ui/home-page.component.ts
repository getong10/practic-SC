import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    isMenuBtn = true;
    activeSidebar = false;

    toggleMenu(toggle: boolean) {
        this.activeSidebar = toggle;
    }
}