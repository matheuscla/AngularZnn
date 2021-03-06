import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReportComponent } from './report.component';

const reportRoutes: Routes = [
  {
    path: '', component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})

export class ReportRouting {}
