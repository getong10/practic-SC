import { NgModule } from "@angular/core";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";

import { InputModule } from "src/shared/input/input.module";

import { InputPasswordComponent } from "./ui/input-password.component";

@NgModule({
    declarations: [InputPasswordComponent],
    exports: [InputPasswordComponent],
    imports: [InputModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class InputPasswordModule {}