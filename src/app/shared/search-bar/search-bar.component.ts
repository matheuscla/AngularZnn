import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchText(event) {
    setTimeout(this.search.emit(event), 3000);
  }
}
