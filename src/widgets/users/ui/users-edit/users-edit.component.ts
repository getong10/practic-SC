import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent {
    @Input() title!: string;
    @Input() textBtn!: string;
    @Output() onChanged: EventEmitter<void> = new EventEmitter();

    closeModal() {
        this.onChanged.emit();
    }
}