import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { ReportService } from "app/report/services/report.service";

import { Http } from '@angular/http';

describe('ReportComponent', () => {
  let component: ReportComponent
  let service: ReportService
  let http: Http

  beforeEach(() => {
    service = new ReportService(http);
    component =  new ReportComponent(service);
  });
  
  describe ('roundValue(value)', () => {
    it ('should round a value', () => {
      let value = 3.14;
      expect(component.roundValue(value)).toEqual(3);
    });
  })

});
