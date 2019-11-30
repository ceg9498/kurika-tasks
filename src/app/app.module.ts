import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { AddTimerComponent } from './add-timer/add-timer.component';
import { EditTimerComponent } from './edit-timer/edit-timer.component';
import { HomeComponent } from './home/home.component';
import { TimersComponent } from './timers/timers.component';
import { CountdownTypeFormComponent } from './countdown-type-form/countdown-type-form.component';
import { ScheduleTypeFormComponent } from './schedule-type-form/schedule-type-form.component';
import { SlimTimerComponent } from './slim-timer/slim-timer.component';
import { DetailTimerComponent } from './detail-timer/detail-timer.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageDisplayComponent } from './message-display/message-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsComponent,
    TimerFormComponent,
    AddTimerComponent,
    EditTimerComponent,
    HomeComponent,
    TimersComponent,
    CountdownTypeFormComponent,
    ScheduleTypeFormComponent,
    SlimTimerComponent,
    DetailTimerComponent,
    MessagesComponent,
    MessageDisplayComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
