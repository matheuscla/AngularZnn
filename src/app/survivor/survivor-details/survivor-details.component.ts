import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SurvivorsService } from 'app/survivor/services/survivors.service';

@Component({
  selector: 'app-survivor-details',
  templateUrl: './survivor-details.component.html',
  styleUrls: ['./survivor-details.component.scss'],
  styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class SurvivorDetailsComponent implements OnInit {
  public survivor;
  public inventory;

  constructor(private router: ActivatedRoute, private suvivorService: SurvivorsService) { }

  ngOnInit() {
    this.router.params.forEach(params => {
      this.suvivorService.getPersonById(params['id'])
        .then(survivor => this.survivor = survivor);

      this.suvivorService.getInventoryById(params['id'])
        .then(inventory => this.inventory = inventory);
    });
  }

}
