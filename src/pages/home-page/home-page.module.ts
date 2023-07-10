import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from "src/widgets/sidebar/sidebar.module";
import { HomeRoutingModule } from "./home-routing-page.module";
import { ButtonModule } from "src/shared/button/button.module";
import { NavbarModule } from "src/widgets/navbar/navbar.module";

import { HomePageComponent } from "./ui/home-page.component";

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomeRoutingModule, 
        NavbarModule, 
        ButtonModule, 
        AngularSvgIconModule.forRoot(), 
        HttpClientModule,
        SidebarModule,
    ],
})
export class HomePageModule {}