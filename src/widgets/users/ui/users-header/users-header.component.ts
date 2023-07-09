import { Component } from "@angular/core";

@Component({
    selector: 'app-users-header',
    templateUrl: './users-header.component.html',
    styleUrls: ['./users-header.component.scss'],
})
export class UsersHeaderComponent {
    isSearch = true;
    isSearchBtn = true;
    viewModal = false;

    showModal() {
        this.viewModal = true
    }

    closeModal() {
        this.viewModal = false;
    }
}