import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { EventDetail, EventType } from '../event';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {


  @Output() addEvent = new EventEmitter<number>();
  @Output() showDetail = new EventEmitter<number>();
  
  showAddEvent: boolean = false;
  showFilterUp: boolean = true;

  events: EventDetail[] = [];
  event: EventDetail;
  eventType = EventType;

  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(listEvents => this.events = listEvents);
  }

  seeDetail(eventId: number) {
    this.showDetail.emit(eventId);
  }

  showAdd(){
    this.addEvent.emit(1);
    this.event = new EventDetail(0,'','',this.eventType.aperitivo,new Date(),[])
  }
  deleteEvent(event: EventDetail) {
    this.eventsService.deleteEvent(event).subscribe(listEvents => this.events = listEvents);
  }
  sortDataUp() {
    this.events.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0))
    this.showFilterUp = false;
  }
  sortDataDown() {
    this.events.sort((a,b) => (a.data < b.data) ? 1 : ((b.data < a.data) ? -1 : 0))
    this.showFilterUp = true;
  }
  
}
