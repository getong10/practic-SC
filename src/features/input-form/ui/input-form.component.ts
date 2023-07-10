import { Component, Input, Output, EventEmitter } from "@angular/core";

import { IDataForm } from "src/app/types/types";

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
    @Input() title!: string;
    @Input() placeholder = '';
    @Input() value = '';
    @Input() name!: string;
    @Input() disabled = false;
    

    @Output() myEvent = new EventEmitter<any>();

    passEvent(data: IDataForm) {
      this.myEvent.emit(data);
    }
}