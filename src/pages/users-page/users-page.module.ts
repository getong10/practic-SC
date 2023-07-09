import { NgModule } from "@angular/core";

import { UsersPageRoutingModule } from "./users-page-routing.module";
import { UsersModule } from "src/widgets/users/users.module";

import { UsersPageComponent } from "./ui/users-page.component";

@NgModule({
    declarations: [UsersPageComponent],
    imports: [UsersPageRoutingModule, UsersModule],
})
export class UsersPageModule {}