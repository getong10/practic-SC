import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InputFormModule } from 'src/features/input-form/input-form.module';
import { InputPasswordModule } from 'src/features/input-password/input-password.module';
import { ButtonModule } from 'src/shared/button/button.module';

import { LoginComponent } from './ui/login.component';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [InputFormModule, InputPasswordModule, ButtonModule, RouterModule],
})
export class LoginModule {}