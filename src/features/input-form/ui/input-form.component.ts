import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
    @Input() title!: string;
    @Input() placeholder = '';
}