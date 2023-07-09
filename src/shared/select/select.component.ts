import { Component, Input } from "@angular/core";

export interface SelectProps {
    name: string;
    value: string;
}

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
    @Input() items: SelectProps[] = [];
}