import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { EventDetail, Partecipante } from '../event';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  
  // @ViewChild('eventDetail') eventDetail:EventDetailComponent;

  private eventDetail: EventDetailComponent;

  @ViewChild('eventDetail') set content(content: EventDetailComponent) {
     if(content) { // initially setter gets called with undefined
         this.eventDetail = content;
         this.eventDetail.setEvent(this.currentDetailEventId);
     } 
  }
  
  currentDetailEventId: number;
  showAddEventComponent: boolean = false;
  showEventDetailComponent: boolean = false;
  showEventListComponent: boolean = true;
  events: EventDetail[] = [];
  event: EventDetail;
  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
   
   /* this.eventsService.getEvents().pipe(
       tap(listEvents => this.events = listEvents)
    ).subscribe() */
  
  }

  hideDetail(){
    this.showEventDetailComponent = false;
    this.showEventListComponent = true;
  }

  showAddEvent(){
    this.showAddEventComponent = true;
    this.showEventListComponent = false;
  }

  showEventList() {
    this.showAddEventComponent = false;
    this.showEventListComponent = true;
  }

  showEventDetail(eventId:number) {
    this.showEventListComponent = false;
    this.showEventDetailComponent = true;
    this.currentDetailEventId = eventId;
    if(this.eventDetail) {
      this.eventDetail.setEvent(this.currentDetailEventId);
    }
  //  setTimeout(() => {
      
  //}, 1);
    
  }

}
