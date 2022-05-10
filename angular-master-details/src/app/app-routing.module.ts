import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MasterComponent } from './master/master.component';
import { PartecipantiComponent } from './partecipanti/partecipanti.component';

const routes: Routes = [
  {path: 'master', component: MasterComponent},
  {path: 'eventDetail', component: EventDetailComponent},
  {path: 'partecipanti/:id', component: PartecipantiComponent},
  {path: '**', redirectTo: 'master'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
