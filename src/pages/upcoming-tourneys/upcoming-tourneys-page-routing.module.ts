import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpcomingTourneysPageComponent } from './ui/upcoming-tourneys-page.component';

const routes: Routes = [{ path: '', component: UpcomingTourneysPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingTourneysPageRoutingModule {}