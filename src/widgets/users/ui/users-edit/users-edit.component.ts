import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent {
    @Input() title!: string;
    @Input() textBtn!: string;
    @Output() onChanged: EventEmitter<void> = new EventEmitter();

    changed() {
        this.onChanged.emit();
    }
}