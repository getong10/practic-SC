import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './ui/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
    ]
})
export class NavbarModule {}