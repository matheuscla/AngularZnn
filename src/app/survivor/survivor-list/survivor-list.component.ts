import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survivor-list',
  templateUrl: './survivor-list.component.html',
  styleUrls: ['./survivor-list.component.scss']
})
export class SurvivorListComponent implements OnInit {
  @Input() survivor;
  @Input() index;
  @Input() survivorsLength;
  private id;

  constructor() { }

  ngOnInit() {
    if (this.survivor) {
      this.id = this.parseId();
    }
  }

  parseId() {
   return this.survivor.location.replace('http://zssn-backend-example.herokuapp.com/api/people/', '')
  }


}
