import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.scss']
})
export class TradeFormComponent implements OnInit, OnChanges {
  public tradeForm;
  @Input() person;
  @Input() consumer;

  public personData = {
    water: 0,
    food: 0,
    ammo: 0,
    medicine: 0
  };

  public consumerData = {
    water: 0,
    food: 0,
    ammo: 0,
    medicine: 0
  };

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.mapUserItems(this.person, this.personData);
    this.mapUserItems(this.consumer, this.consumerData);
  }

  mapUserItems(userMapped, user) {
    userMapped.map(u => {
      switch (u.item.name) {
        case 'Water':
          user.water = u.quantity;
          break;
        case 'Food':
          user.food = u.quantity;
          break;
        case 'Ammunition':
          user.ammo = u.quantity;
          break;
        case 'Medication':
          user.medicine = u.quantity;
          break;
      }
    });
  }

 ngOnChanges() {
   this.mapUserItems(this.person, this.personData);
   this.mapUserItems(this.consumer, this.consumerData);
 }

 sumPoints(inventory) {
   const sum = (inventory.water * 4) + (inventory.food * 3) + inventory.ammo + (inventory.medicine * 2);
   return sum;
 }

}
