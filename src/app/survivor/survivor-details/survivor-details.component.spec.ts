import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorDetailsComponent } from './survivor-details.component';

describe('SurvivorDetailsComponent', () => {
  let component: SurvivorDetailsComponent;
  let fixture: ComponentFixture<SurvivorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
