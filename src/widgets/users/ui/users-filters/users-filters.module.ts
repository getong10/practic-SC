import { NgModule } from "@angular/core";

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SelectModule } from "src/shared/select/select.module";

import { UsersFiltersComponent } from "./users-filters.component";
import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UsersFiltersComponent],
    exports: [UsersFiltersComponent],
    imports: [SelectModule, MatSelectModule, MatFormFieldModule, NgFor, NgIf, FormsModule],
})
export class UsersFiltersModule {}