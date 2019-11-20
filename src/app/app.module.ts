import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { AddTimerComponent } from './add-timer/add-timer.component';
import { EditTimerComponent } from './edit-timer/edit-timer.component';
import { HomeComponent } from './home/home.component';
import { TimersComponent } from './timers/timers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsComponent,
    TimerFormComponent,
    AddTimerComponent,
    EditTimerComponent,
    HomeComponent,
    TimersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
