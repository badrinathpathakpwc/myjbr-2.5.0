// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { ChartsModule } from 'ng2-charts';
import { SuiModule } from 'ng2-semantic-ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TelemetryModule } from '@sunbird/telemetry';
import { DiscussionModule } from './../discussion/discussion.module';
// Custome component(s) and services
import {
  CourseConsumptionService, DashboardUtilsService, OrganisationService,
  RendererService, LineChartService, DownloadService, CourseProgressService,
  UsageService
} from './services';
import {
  OrganisationComponent, CourseConsumptionComponent, CourseProgressComponent, ContentCreationStaticsComponent,
  DataTableComponent, DataChartComponent
} from './components';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// SB core and shared services
import { SearchService } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { OrderModule } from 'ngx-order-pipe';
// Imported Primeng Modules
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { PermissionDirective } from './directives';
//Imported Org Charts Modules
import { OrgChartModule } from 'ng2-org-chart';
// Import Slick Library
import { SlickModule } from 'ngx-slick';
import { UsageReportsComponent } from './components/usage-reports/usage-reports.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SuiModule,
    SharedModule,
    OrderModule,
    TelemetryModule,
    NgxDaterangepickerMd.forRoot(),
    DiscussionModule,
    CalendarModule,
    TableModule,
    ChartModule,
    DropdownModule,
    OrgChartModule,
    SlickModule
  ],
  declarations: [CourseConsumptionComponent, OrganisationComponent, CourseProgressComponent, UsageReportsComponent, ContentCreationStaticsComponent, PermissionDirective,
    DataTableComponent, DataChartComponent],
  exports: [CourseProgressComponent, DataTableComponent, PermissionDirective],
  providers: [
    RendererService,
    DashboardUtilsService,
    SearchService,
    LineChartService,
    CourseConsumptionService,
    OrganisationService, DownloadService, CourseProgressService, UsageService, DatePipe]
})
export class DashboardModule { }
