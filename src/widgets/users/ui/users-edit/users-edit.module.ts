import { NgModule } from "@angular/core";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";

import { ButtonModule } from "src/shared/button/button.module";
import { InputFormModule } from "src/features/input-form/input-form.module";
import { InputPasswordModule } from "src/features/input-password/input-password.module";
import { SelectFormModule } from "src/features/select-form/select-form.module";

import { UsersEditComponent } from "./users-edit.component";

@NgModule({
    declarations: [UsersEditComponent],
    exports: [UsersEditComponent],
    imports: [
        SelectFormModule, 
        AngularSvgIconModule.forRoot(), 
        HttpClientModule, 
        InputPasswordModule, 
        InputFormModule,
        ButtonModule,
    ],
})
export class UsersEditModule {}