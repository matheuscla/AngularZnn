import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';
import { SurvivorsService } from './survivor/services/survivors.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    SharedModule
  ],
  providers: [SurvivorsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
