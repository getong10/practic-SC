import { NgModule } from '@angular/core';

import { ModalModule } from 'src/shared/modal/modal.module';
import { InputPasswordModule } from 'src/features/input-password/input-password.module';
import { SelectFormModule } from 'src/features/select-form/select-form.module';
import { InputFormModule } from 'src/features/input-form/input-form.module';
import { InputModule } from 'src/shared/input/input.module';
import { ButtonModule } from 'src/shared/button/button.module';

import { RegisterComponent } from './ui/register.component';


@NgModule({
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    imports: [
        InputPasswordModule, 
        InputFormModule, 
        InputModule, 
        SelectFormModule, 
        ButtonModule,
        ModalModule,
    ],
})
export class RegisterModule {}