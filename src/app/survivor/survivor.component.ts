import { Component, OnInit, EventEmitter } from '@angular/core';
import { SurvivorsService } from './services/survivors.service';
import { ItemListComponent } from './../shared/item-list/item-list.component';


@Component({
  selector: 'app-survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.scss']
})
export class SurvivorComponent implements OnInit {
  public survivors = [];
  public survivorFilter;
  public survivorsLength = 9;

  constructor(private _service: SurvivorsService) { }

  ngOnInit() {
    this._service.getPeople()
      .subscribe(people => {
        people.map(person => {
          if (person['infected?'] === false) {
            this.survivors.push(person);
          }
        });
      });
  }

  searchSurvivors(event) {
    this.survivorFilter = { name: event };
  }

  moreSurvivors() {
    this.survivorsLength += 9;
  }




}
