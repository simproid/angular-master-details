import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsService } from './events.service';
import { MasterComponent } from './master/master.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FormsModule } from '@angular/forms';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { PartecipantiComponent } from './partecipanti/partecipanti.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddPartecipanteComponent } from './add-partecipante/add-partecipante.component';
import { EventTypePipe } from './event-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    EventDetailComponent,
    ValidationMessageComponent,
    PartecipantiComponent,
    AddEventComponent,
    EventListComponent,
    AddPartecipanteComponent,
    EventTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
