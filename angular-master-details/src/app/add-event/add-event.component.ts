import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventDetail, EventType } from '../event';
import { EventsService } from '../events.service';  

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @ViewChild('formAddEvent') formAddEvent: NgForm;
  @Output() back = new EventEmitter<number>();
  
  events: EventDetail[] = [];
  event: EventDetail ;
  eventType: EventType;
  eventTypes: number[] = [];


  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    for (let item in EventType) {
      if (!isNaN(Number(item))) {
         this.eventTypes.push(Number(item));
      }
  }

  this.event = new EventDetail(0,'','',EventType.aperitivo,new Date(),[]);

  }

  addEvent() {
    this.eventsService.addEvent(EventDetail.build(this.event)).subscribe(e => this.back.emit(1));
    
  }



}
