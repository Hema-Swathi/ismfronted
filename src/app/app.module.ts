import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { PanelComponent } from './components/panel/panel.component';
import { ViewSheduleComponent } from './components/view-shedule/view-shedule.component';
import { HrHomeComponent } from './components/hr-home/hr-home.component';
import { ScheduledInterviewComponent } from './components/scheduled-interview/scheduled-interview.component';
import { ResheduleComponent } from './components/reshedule/reshedule.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobhiringComponent } from './navbar/jobhiring/jobhiring.component';
import { JobOpeningComponent } from './components/jobhiring/job-opening/job-opening.component';
import { ViewEditSheduledComponent } from './components/jobhiring/view-edit-sheduled/view-edit-sheduled.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    PanelComponent,
    ViewSheduleComponent,
    HrHomeComponent,
    ScheduledInterviewComponent,
    ResheduleComponent,
    AdminFormComponent,
    JobhiringComponent,
    JobOpeningComponent,
    ViewEditSheduledComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
