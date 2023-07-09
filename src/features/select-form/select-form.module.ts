import { NgModule } from "@angular/core";

import { SelectModule } from "src/shared/select/select.module";

import { SelectFormComponent } from "./ui/select-form.component";

@NgModule({
    declarations: [SelectFormComponent],
    exports: [SelectFormComponent],
    imports: [SelectModule],
})
export class SelectFormModule {}