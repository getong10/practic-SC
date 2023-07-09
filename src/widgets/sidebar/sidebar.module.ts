import { NgModule } from "@angular/core";
import { AngularSvgIconModule } from "angular-svg-icon";
import { RouterModule } from '@angular/router';

import { ButtonModule } from "src/shared/button/button.module";

import { SidebarComponent } from "./ui/sidebar.component";

@NgModule({
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    imports: [
        AngularSvgIconModule.forRoot(),
        ButtonModule,
        RouterModule,
    ]
})
export class SidebarModule {}