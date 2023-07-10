import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { UpcomingTourneysPageRoutingModule } from "./upcoming-tourneys-page-routing.module";

import { UpcomingTourneysPageComponent } from "./ui/upcoming-tourneys-page.component";

@NgModule({
    declarations: [UpcomingTourneysPageComponent],
    imports: [
        UpcomingTourneysPageRoutingModule,
        HttpClientModule,
        CommonModule,
    ],
})
export class UpcomingTourneysPageModule {}