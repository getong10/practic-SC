import { NgModule } from "@angular/core";

import { InputFormComponent } from "./ui/input-form.component";

import { InputModule } from "src/shared/input/input.module";

@NgModule({
    declarations: [InputFormComponent],
    exports: [InputFormComponent],
    imports: [InputModule],
})
export class InputFormModule {}