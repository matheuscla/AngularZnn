import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SurvivorComponent } from './survivor.component';
import { SurvivorDetailsComponent } from "app/survivor/survivor-details/survivor-details.component";

const suvivorRoutes: Routes = [
  {
    path: '', component: SurvivorComponent
  },
  {
    path: ':id', component: SurvivorDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(suvivorRoutes)],
  exports: [RouterModule]
})

export class SurvivorRouting {}
