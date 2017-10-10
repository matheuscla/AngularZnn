import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/survivors', pathMatch: 'full'
  },
  {
    path: 'survivors', loadChildren: 'app/survivor/survivor.module#SurvivorModule'
  },
  {
    path: 'trades', loadChildren: 'app/trade/trade.module#TradeModule'
  },
  {
    path: 'reports', loadChildren: 'app/report/report.module#ReportModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})

export class AppRouting {}
