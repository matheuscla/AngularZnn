import { Component, OnInit } from '@angular/core';
import { SurvivorsService } from './../survivor/services/survivors.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  public people = [];
  public items1;
  public items2;
  public points1;
  public points2;

  constructor(private survivorService: SurvivorsService) { }

  ngOnInit() {
    if (this.survivorService.people) {
      this.people = this.survivorService.people;
    } else {
      this.survivorService.getPeople()
        .subscribe(people => this.people = people);
    }
  }

  selectItems(value) {
    this.survivorService.getItems(value)
      .subscribe(inventory => {
        this.items1 = inventory;
        this.points1 = this.sumPoints(inventory);
      });
  }

  selectItems2(value) {
    this.survivorService.getItems(value)
      .subscribe(inventory => {
        this.items2 = inventory;
        this.points2 = this.sumPoints(inventory);
      });
  }

  sumPoints(inventory) {
    let sum = 0;
    inventory.map(i => {
      sum += i.quantity * i.item.points;
    });

    return sum;
  }


}
