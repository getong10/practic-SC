import { Component, OnInit } from "@angular/core";

import { IUsersData } from "../types/users";
import { UsersService } from "../services/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersService],
})
export class UsersComponent implements OnInit {
    constructor(private usersService: UsersService) {}

    usersData: IUsersData = {
        filterTourneys: [],
        users: [],
    };
    viewModal = 0;

    showModal(count: number) {
        this.viewModal = count;
    }

    closeModal() {
        this.viewModal = 0;
    }

    ngOnInit(): void {
        this.usersService.getUsersData().subscribe(response => {
            this.usersData = response;
        })
    }
}