import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;

  beforeEach(() => {
    component = new SearchBarComponent;
  });

  it ('should emit search event', () => {
    component.search.subscribe(value => {
      expect(value).toBe('');
    })
  })
});
