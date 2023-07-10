import { Component, Input, Output, EventEmitter } from "@angular/core";

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
    @Input() disabled = false;
    @Input() name!: string;
    @Output() myEvent = new EventEmitter<any>();

    handleChange(event: any) {
        this.myEvent.emit({
            name: event.target.name,
            value: event.target.value,
        });
    }
}