import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
  @Input() reportDescription;
  @Input() reportResult1;
  @Input() reportResult2;
  @Input() reportIcon;
  @Input() reportType;

  constructor() { }

  ngOnInit() {
  }
}
