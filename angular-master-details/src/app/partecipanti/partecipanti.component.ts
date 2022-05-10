import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetail, Partecipante } from '../event';
import { EventsService } from '../events.service';
import { markAsDirty } from '../global';

@Component({
  selector: 'app-partecipanti',
  templateUrl: './partecipanti.component.html',
  styleUrls: ['./partecipanti.component.scss']
})
export class PartecipantiComponent implements OnInit {
  
  @ViewChild('formPartecipante') formPartecipante: NgForm;
  @ViewChild('form') form: NgForm;
  event: EventDetail;
  partecipante: Partecipante;
  showEditPanelPartecipante: boolean = false;
  showAddPartecipanteComponent: boolean = false;
  eventId: number;

  constructor(private router: ActivatedRoute,private route: Router,private eventsService: EventsService) { }


  ngOnInit(): void {
    this.eventId = +this.router.snapshot.params['id'];
    this.eventsService.getEvent(this.eventId).subscribe(eventDetail => this.event = eventDetail);
    this.partecipante = new Partecipante(1,'');
  }

  addPartecipante() {
    this.eventsService.addPartecipante(this.partecipante,this.event.id).subscribe();
  }

  savePartecipante() {
    if (this.form.invalid) {            
      markAsDirty(this.form);
    } else {
      this.eventsService.saveEvent(this.event).subscribe(e => this.showEditPanelPartecipante = false);
      console.log(this.event)
    }
  }
  
  deletePartecipante(partecipanteId: number){
    
  }

  showAddPartecipante(){
    this.showAddPartecipanteComponent = true;
    this.showAddPartecipanteComponent = true;
  }
}
