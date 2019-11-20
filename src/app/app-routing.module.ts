import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AddTimerComponent } from './add-timer/add-timer.component';
import { EditTimerComponent } from './edit-timer/edit-timer.component';
import { HomeComponent } from './home/home.component';
import { TimersComponent } from './timers/timers.component';


const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'timers/new', component: AddTimerComponent },
  { path: 'timers/edit/:id', component: EditTimerComponent },
  { path: 'timers', component: TimersComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
