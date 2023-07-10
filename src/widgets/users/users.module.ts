import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ModalModule } from "src/shared/modal/modal.module";
import { ButtonModule } from "src/shared/button/button.module";
import { UsersEditModule } from "./ui/users-edit/users-edit.module";
import { UsersHeaderModule } from "./ui/users-header/users-header.module";
import { UsersChildModule } from "./ui/users-child/users-child.module";
import { UsersFiltersModule } from "./ui/users-filters/users-filters.module";

import { UsersComponent } from "./ui/users.component";

@NgModule({
    declarations: [UsersComponent],
    exports: [UsersComponent],
    imports: [
        UsersEditModule, 
        UsersHeaderModule, 
        UsersChildModule, 
        UsersFiltersModule, 
        ModalModule,
        ButtonModule,
        CommonModule,
        HttpClientModule,
    ],
})
export class UsersModule {}