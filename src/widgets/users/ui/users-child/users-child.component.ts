import { Component, EventEmitter, Output, Input, OnInit } from "@angular/core";

import { IUserData } from "../../types/users";
@Component({
    selector: 'app-users-child',
    templateUrl: './users-child.component.html',
    styleUrls: ['./users-child.component.scss'],
})
export class UsersChildComponent implements OnInit {
    @Input() userData: IUserData  = {
        name: '',
        title: {
            city: '',
            school: '',
            classroom: '',
        },
        endTourneys: [],
        startTourneys: [],
    };
    @Output() onChanged = new EventEmitter<number>();

    endTourneys = [
        {name: 'Прошедшие турниы', value: ''},
    ]

    startTourneys = [
        {name: 'Запланированные турниры', value: ''},
    ]

    ngOnInit(): void {
        this.userData.startTourneys = this.startTourneys.concat(this.userData.startTourneys);
        this.userData.endTourneys = this.endTourneys.concat(this.userData.endTourneys);
    }

    setMargin = true;

    changed(count: number) {
        this.onChanged.emit(count);
    }
}