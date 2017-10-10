import { async, TestBed } from '@angular/core/testing';

import { SurvivorComponent } from './survivor.component';
import { SurvivorsService } from "app/survivor/services/survivors.service";
import { Http } from "@angular/http";

fdescribe('SurvivorComponent', () => {
  let component: SurvivorComponent;
  let service: SurvivorsService;
  let http: Http;

  beforeEach(() => {
    service = new SurvivorsService(http);
    component = new SurvivorComponent(service);
  });

  it ('should search survivors', () => {
    component.searchSurvivors('Negan');
    expect(component.survivorFilter.name).toBe('Negan');
  });

  it ('should list more survivors by index', () => {
    component.moreSurvivors();
    expect(component.survivorsLength).toEqual(18);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
