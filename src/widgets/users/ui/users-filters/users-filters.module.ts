import { NgModule } from "@angular/core";

import { SelectModule } from "src/shared/select/select.module";

import { UsersFiltersComponent } from "./users-filters.component";

@NgModule({
    declarations: [UsersFiltersComponent],
    exports: [UsersFiltersComponent],
    imports: [SelectModule],
})
export class UsersFiltersModule {}