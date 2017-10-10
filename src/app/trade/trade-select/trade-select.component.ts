import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trade-select',
  templateUrl: './trade-select.component.html',
  styleUrls: ['./trade-select.component.scss']
})
export class TradeSelectComponent implements OnInit {
  @Input() inputLabel;
  @Input() inputPlaceholder;
  @Input() inputOptions;

  @Output() selectSurvivor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(value) {
    this.selectSurvivor.emit(value);
  }

}
