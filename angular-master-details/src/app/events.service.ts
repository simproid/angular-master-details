import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { EventDetail, Partecipante } from './event';
import { Observable, of } from 'rxjs';
import { getEvents, setEvents } from './global';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  

  _baseUrl: string = 'http://www.google.it';

 

  constructor(private _http: HttpClient) {

  }

  getEvents(): Observable<EventDetail[]> {
    return this._http.get<EventDetail[]>(`${this._baseUrl}/all-events` /*, { params, headers } */)
      .pipe(
        map(e => e.map(ee => EventDetail.build(ee))),
        catchError(this.handleError())
      );
  }

  getPartecipanti(): Observable<EventDetail[]> {
    return this._http.get<EventDetail[]>(`${this._baseUrl}/all-events` /*, { params, headers } */)
      .pipe(
        map(e => e.map(ee => EventDetail.build(ee))),
        catchError(this.handleError())
      );
  }

  getEvent(eventId: number) {
    let params = new HttpParams().set('eventId', eventId);
    return this._http.get<EventDetail>(`${this._baseUrl}/event-detail`, { params } )
      .pipe(
        map(e => EventDetail.build(e)),
        catchError(this.handleErrorDetail(eventId))
      );
  }

  addPartecipante(partecipante: Partecipante, eventId: number) {
    return this._http.post<EventDetail>(`${this._baseUrl}/add-partecipante`, partecipante )
    .pipe(
      map(e => EventDetail.build(e)),
      catchError(this.handleErrorAddPartecipante(partecipante, eventId))
    );
  }

  addEvent(event: EventDetail) {
    return this._http.post<EventDetail>(`${this._baseUrl}/add-event`, event )
    .pipe(
      map(e => EventDetail.build(e)),
      catchError(this.handleErrorAddEvent(event))
    );
  }

  saveEvent(event: EventDetail) {
    return this._http.post<EventDetail>(`${this._baseUrl}/save-event`, event )
      .pipe(
        map(e => EventDetail.build(e)),
        catchError(this.handleErrorSave(event))
      );
  }
  
  deleteEvent(event: EventDetail) {
    return this._http.post<EventDetail[]>(`${this._baseUrl}/delete-event`, event )
      .pipe(
        map(e => e.map(ee => EventDetail.build(ee))),
        catchError(this.handleDeleteEvent(event))
      );
  }

  private handleErrorSave(event: EventDetail) {
    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      setEvents(getEvents().filter(e => e.id !== event.id))
      getEvents().push(event);
      console.log(getEvents());

      // Let app keep running but indicate failure.
      return of(getEvents());
    };
  }

 

  private handleErrorAddEvent(event: EventDetail) {
    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      getEvents().push(event)
      let index = getEvents().indexOf(event);
      event.id = index + 1;
      // Let app keep running but indicate failure.
      return of(getEvents());
    };
  }

  private handleDeleteEvent(event: EventDetail) {
    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      setEvents(getEvents().filter(e => e.id !== event.id)) // prende tutti gli eventi, li filtra in base a quelli che hanno l'id diverso da quello che gli passiamo e poi setta il nuovo array
      // console.log(getEvents());

      // Let app keep running but indicate failure.
      return of(getEvents());
    };
  }


  private handleErrorAddPartecipante(partecipante: Partecipante, eventId: number) {
    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      getEvents().find(e => e.id == eventId)?.partecipanti.push(partecipante)
      
      // Let app keep running but indicate failure.
      return of(getEvents());
    };
  }
  
  private handleError() {

    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      // Let app keep running but indicate failure.
      return of(getEvents());
    };
  }

  private handleErrorDetail(eventId: number) {

    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead        

      // Let app keep running but indicate failure.
      return of(getEvents().find(event => event.id == eventId) ?? new EventDetail(0, "Evento del cacchio", "Descrizione evento",3, new Date(),[]));
    };
  }

}
