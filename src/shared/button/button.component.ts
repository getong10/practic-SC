import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() isMenuBtn!: boolean;
    @Input() setColor?: string;
    @Input() setBackgroundColor?: string;
    @Input() isSearchBtn!: boolean;
    @Input() setMargin!: boolean;
    @Input() sidebarBtn!: boolean;
}