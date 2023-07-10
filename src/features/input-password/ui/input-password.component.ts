import { Component, Input, Output, EventEmitter } from "@angular/core";

import { IDataForm } from "src/app/types/types";

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html',
    styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
    @Input() title!: string;
    @Input() disabled = false;
    @Input() name!: string;
    @Input() value = '';
    @Output() myEvent = new EventEmitter<any>();

    passEvent(data: IDataForm) {
      this.myEvent.emit(data);
    }
 
    isPadding = true;
    isPassword = 'password';

    showPassword() {
        this.isPassword = this.isPassword === 'password' ? 'text' : 'password';
    }
}