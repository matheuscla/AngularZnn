import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TradeComponent } from './trade.component';

const tradeRoutes: Routes = [
  {
    path: '', component: TradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(tradeRoutes)],
  exports: [RouterModule]
})

export class TradeRouting {}
