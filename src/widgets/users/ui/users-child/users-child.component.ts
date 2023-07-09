import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-users-child',
    templateUrl: './users-child.component.html',
    styleUrls: ['./users-child.component.scss'],
})
export class UsersChildComponent {
    @Output() onChanged = new EventEmitter<number>();

    items = [
        {name: 'ФИO', value: 'FIO'},
        {name: 'Ярославль', value: 'yaroslavl'},
    ]

    setMargin = true;

    changed(count: number) {
        this.onChanged.emit(count);
    }
}