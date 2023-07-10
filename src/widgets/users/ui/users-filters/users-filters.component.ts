import { Component, Input } from "@angular/core";

import { SelectProps } from "src/shared/select/select.component";

@Component({
    selector: 'app-users-filters',
    templateUrl: './users-filters.component.html',
    styleUrls: ['./users-filters.component.scss'],
})
export class UsersFiltersComponent {
    @Input() filterTourneys: SelectProps[] = [];

    filters: SelectProps[] = [
        { name: 'ФИО', value: 'FIO' },
        { name: 'Городу', value: 'city' },
        { name: 'Школе', value: 'school' },
        { name: 'Классу', value: 'classroom' },
    ];
}