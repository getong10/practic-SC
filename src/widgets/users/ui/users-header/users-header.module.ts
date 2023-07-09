import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";

import { ModalModule } from "src/shared/modal/modal.module";
import { UsersEditModule } from "../users-edit/users-edit.module";
import { InputModule } from "src/shared/input/input.module";
import { ButtonModule } from "src/shared/button/button.module";

import { UsersHeaderComponent } from "./users-header.component";

@NgModule({
    declarations: [UsersHeaderComponent],
    exports: [UsersHeaderComponent],
    imports: [
        ButtonModule, 
        AngularSvgIconModule.forRoot(), 
        HttpClientModule, 
        InputModule,
        UsersEditModule,
        ModalModule,
        CommonModule,
    ]
})
export class UsersHeaderModule {}