import { Component, Input } from "@angular/core";

import { SelectProps } from "src/shared/select/select.component";

@Component({
    selector: 'app-select-form',
    templateUrl: './select-form.component.html',
    styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent {
    @Input() title!: string
    @Input() items: SelectProps[] = [];
}