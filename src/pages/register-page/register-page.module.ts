import { NgModule } from "@angular/core";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterModule } from "src/widgets/register/register.module";

import { RegisterPageComponent } from "./ui/register-page.component";

@NgModule({
    declarations: [RegisterPageComponent],
    imports: [RegisterRoutingModule, RegisterModule],
})
export class RegisterPageModule {}