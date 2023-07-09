import { NgModule } from "@angular/core";

import { UsersEditModule } from "../users-edit/users-edit.module";
import { SelectModule } from "src/shared/select/select.module";
import { ButtonModule } from "src/shared/button/button.module";

import { UsersChildComponent } from "./users-child.component";

@NgModule({
    declarations: [UsersChildComponent],
    exports: [UsersChildComponent],
    imports: [SelectModule, ButtonModule, UsersEditModule],
})
export class UsersChildModule {}