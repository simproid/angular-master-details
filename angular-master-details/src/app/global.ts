import { AbstractControl, FormControl, FormGroup, NgForm } from "@angular/forms";
import { EventDetail, EventType, Partecipante } from "./event";

var events = [
    EventDetail.build(new EventDetail(1, "Evento 1", "Cena + Aperitivo",EventType.pranzo, new Date(),[new Partecipante(1,"Tizio")])),
    EventDetail.build(new EventDetail(2, "Evento 2", "Cena + Aperitivo",EventType.cena, new Date(2022, 3, 17),[]))
  ];

  export function getEvents() {
    return events;
  }

  export function setEvents(eventsList: EventDetail[]) {
    events = eventsList;
  }

  export function markAsDirty(control: AbstractControl | NgForm) {
    if (control instanceof FormControl) {
        control.markAsDirty();
        return;
    }

    if (control instanceof NgForm || control instanceof FormGroup) {
        Object.keys(control.controls)
            .forEach(e => markAsDirty(control.controls[e]));
    }
}