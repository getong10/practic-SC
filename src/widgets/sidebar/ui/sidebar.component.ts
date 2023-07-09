import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    @Output() onChangeSidebar = new EventEmitter<boolean>();

    sidebarBtn = true;

    toggleMenu(toggle: boolean) {
        this.onChangeSidebar.emit(toggle);
    }
}