import { TestBed, inject } from '@angular/core/testing';
import { SurvivorsService } from './survivors.service';

describe('SurvivorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurvivorsService]
    });
  });

  it('should ...', inject([SurvivorsService], (service: SurvivorsService) => {
    expect(service).toBeTruthy();
  }));
});
