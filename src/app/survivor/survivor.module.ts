import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { AgmCoreModule } from '@agm/core';

import { SurvivorComponent } from './survivor.component';
import { SurvivorRouting } from './survivor.routing';
import { SurvivorListComponent } from './survivor-list/survivor-list.component';
import { SearchBarComponent } from './../shared/search-bar/search-bar.component';
import { SurvivorFormComponent } from './survivor-form/survivor-form.component';

import { SurvivorDetailsComponent } from './survivor-details/survivor-details.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    SurvivorComponent,
    SurvivorListComponent,
    SearchBarComponent,
    SurvivorFormComponent,
    SurvivorDetailsComponent
  ],
  imports: [
    SharedModule,
    MaterializeModule,
    CommonModule,
    SurvivorRouting,
    Ng2FilterPipeModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeJy4Xv-rhS2RNXf5XKgZQU_pBujILB14'
    })
  ]
})

export class SurvivorModule {}
