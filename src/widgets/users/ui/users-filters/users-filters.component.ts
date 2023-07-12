import { Component, Input, OnInit } from "@angular/core";

import { SelectProps } from "src/shared/select/select.component";
import { IUsersData } from "../../types/users";
import { UsersService } from "../../services/users.service";

@Component({
    selector: 'app-users-filters',
    templateUrl: './users-filters.component.html',
    styleUrls: ['./users-filters.component.scss'],
    providers: [UsersService]
})
export class UsersFiltersComponent implements OnInit {
    constructor (private userService: UsersService) {}

    @Input() filterTourneys: SelectProps[] = [];
    
    usersData: IUsersData = {
        filterTourneys: [],
        users: [],
    };
    filters: SelectProps[] = [
        { name: 'ФИО', value: 'FIO' },
        { name: 'Городу', value: 'city' },
        { name: 'Школе', value: 'school' },
        { name: 'Классу', value: 'classroom' },
    ];

    selectedUserFilter: string | SelectProps = '';
    selectedTourneyFilter: string | SelectProps = '';

    ngOnInit(): void {
        this.userService.getUsersData().subscribe(response => {
            this.usersData = response;
        })
    }
    
    sortByUsersFilters() {
        if (this.selectedUserFilter === 'ФИО') {
            let res = this.usersData.users.sort((a, b) => {
                const nameA = a.name.trim().toLowerCase();
                const nameB = b.name.trim().toLowerCase();

                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                } else return 0;
            });
            console.log(res);
        } else if(this.selectedUserFilter === 'Городу') {
            let res = this.usersData.users.sort((a, b) => {
                const cityA = a.title.city.trim().toLowerCase();
                const cityB = b.title.city.trim().toLowerCase();

                if (cityA < cityB) {
                    return -1;
                } else if (cityA > cityB) {
                    return 1;
                } else return 0;
            })
            console.log(res)
        } else if(this.selectedUserFilter === 'Школе') {
            let res: any = this.usersData.users.sort((a, b) => {
                const schoolA = Number(a.title.school.trim().toLowerCase().substr(6));
                const schoolB = Number(b.title.school.trim().toLowerCase().substr(6));

                return schoolA - schoolB
            })
            console.log(res)
        } else if(this.selectedUserFilter === 'Классу') {
            let res = this.usersData.users.sort((a, b) => {
                const classroomA = a.title.classroom.trim().toLowerCase();
                const classroomB = b.title.classroom.trim().toLowerCase();

                if (classroomA < classroomB) {
                    return -1;
                } else if (classroomA > classroomB) {
                    return 1;
                } else return 0;
            })
            console.log(res)
        }
    }

    sortByTourneyFilters() {
        if (this.selectedTourneyFilter === 'Баскетбол') {
            console.log('Sort by Баскетбол')
        } else if(this.selectedTourneyFilter === 'Футбол') {
            console.log('Sort by Футбол')
        } else if(this.selectedTourneyFilter === 'Шахматы') {
            console.log('Sort by Шахматы')
        } else if(this.selectedTourneyFilter === 'Волейбол') {
            console.log('Sort by Волейбол')
        } else if(this.selectedTourneyFilter === 'Бег') {
            console.log('Sort by Бег')
        } else if(this.selectedTourneyFilter === 'Плавание') {
            console.log('Sort by Плавание')
        } else if(this.selectedTourneyFilter === 'Теннис') {
            console.log('Sort by Теннис')
        }
    }
}