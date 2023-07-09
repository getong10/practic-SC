import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginModule } from 'src/widgets/login/login.module';

import { LoginPageComponent } from './ui/login-page.component';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        RouterModule,
        LoginPageRoutingModule,
        LoginModule
    ],
})
export class LoginPageModule {}