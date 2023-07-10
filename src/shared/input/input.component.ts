import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() isPadding?: boolean;
    @Input() type = 'text';
    @Input() id?: string;
    @Input() placeholder = '';
    @Input() isSearch!: boolean;
    @Input() value: string = '';
    @Input() name!: string;
    @Input() disabled = false;
    @Input() checked: boolean = false;

    @Output() myEvent = new EventEmitter<any>();

    handleChange(event: any) {
        let value = event.target.value;
        if (event.target.name === 'getNews') value = event.target.checked;
        
        this.myEvent.emit({
            name: event.target.name,
            value,
        });
    }
}