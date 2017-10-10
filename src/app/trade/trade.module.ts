import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { TradeComponent } from './trade.component';
import { TradeService } from './services/trade.service';
import { TradeRouting } from './trade.routing';
import { TradeSelectComponent } from './trade-select/trade-select.component';
import { TradeFormComponent } from './trade-form/trade-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [TradeComponent, TradeSelectComponent, TradeFormComponent],
  exports: [TradeComponent],
  imports: [
    SharedModule,
    MaterializeModule,
    TradeRouting,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TradeService]
})

export class TradeModule {}
