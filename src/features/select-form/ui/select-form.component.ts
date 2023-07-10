import { Component, Input, EventEmitter, Output } from "@angular/core";

import { IDataForm } from "src/app/types/types";

import { SelectProps } from "src/shared/select/select.component";

@Component({
    selector: 'app-select-form',
    templateUrl: './select-form.component.html',
    styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent {
    @Input() title!: string
    @Input() items: SelectProps[] = [];
    @Input() disabled = true;
    @Input() name!: string;
    @Output() myEvent = new EventEmitter<any>();

    passEvent(data: IDataForm) {
      this.myEvent.emit(data);
    }
}