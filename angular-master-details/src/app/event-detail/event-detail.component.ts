import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetail, Partecipante } from '../event';
import { EventsService } from '../events.service';
import { markAsDirty } from '../global';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {
 
  @ViewChild('form') form: NgForm;
  
  @Output() back = new EventEmitter<number>();
  
  event: EventDetail;

  eventId: number;
  editEvent: boolean = true;

  constructor(private router: ActivatedRoute,private route: Router,  private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventId = +this.router.snapshot.params['id'];
    this.eventsService.getEvent(this.eventId).subscribe(eventDetail => this.event = eventDetail);
    
  }

  save() {
    if (this.form.invalid) {            
      markAsDirty(this.form);
    } else {
      this.eventsService.saveEvent(this.event).subscribe(e => this.back.emit(1));
    }
  }



  setEvent(eventId: number) {
    this.eventsService.getEvent(eventId).subscribe(eventDetail => this.event = eventDetail);
  }

 
}
