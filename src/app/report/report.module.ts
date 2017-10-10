import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report.component';
import { ReportRouting } from './report.routing';
import { ReportService } from './services/report.service';
import { ReportDetailsComponent } from './report-details/report-details.component';

@NgModule({
  declarations: [ReportComponent, ReportDetailsComponent],
  exports: [ReportComponent],
  imports: [MaterializeModule, ReportRouting, CommonModule],
  providers: [ReportService]
})

export class ReportModule {}
