import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [NavbarComponent, ItemListComponent],
  exports: [NavbarComponent, ItemListComponent],
  imports: [MaterializeModule, RouterModule, CommonModule]
})

export class SharedModule {}
