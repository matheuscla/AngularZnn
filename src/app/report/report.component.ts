import { Component, OnInit } from '@angular/core';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public resultInfected;
  public resultSurvivors;
  public resultInfectedPoints;
  public resultPeopleInventory;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getInfectedReport()
      .then(result => {
        this.resultInfected = result;
      });

    this.reportService.getSurvivorReport()
      .then(result => {
        this.resultSurvivors = result;
      });

    this.reportService.getInfectedPoints()
      .then(result => {
        this.resultInfectedPoints = result;
      });

    this.reportService.getPeopleInventory()
      .then(result => {
        this.resultPeopleInventory = result;
      });
  }

  roundValue(value) {
    return Math.floor(value);
  }
}
