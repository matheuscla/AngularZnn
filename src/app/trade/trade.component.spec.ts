import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeComponent } from './trade.component';
import { SurvivorsService } from "app/survivor/services/survivors.service";
import { Http } from "@angular/http";

fdescribe('TradeComponent', () => {
  let component: TradeComponent;
  let service: SurvivorsService;
  let http: Http;

  beforeEach(() => {
    service = new SurvivorsService(http);
    component = new TradeComponent(service);
  });

  describe ('sumPoints()', () => {
    it ('should sum items points', () => {
      let inventory = [
        { item: { points: 2 } , quantity: 10 },
        { item: { points: 1 }, quantity: 5 }
      ];  
      expect(component.sumPoints(inventory)).toEqual(25);
    });
  });

});
