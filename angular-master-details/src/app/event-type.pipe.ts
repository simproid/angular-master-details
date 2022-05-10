import { Pipe, PipeTransform } from '@angular/core';
import { EventType } from './event';

@Pipe({
  name: 'eventType'
})
export class EventTypePipe implements PipeTransform {

  transform(value: EventType): string {
    switch (value) {
      case EventType.aperitivo:
          return 'Aperitivo';
      case EventType.cena:
          return 'Cena';
      case EventType.pranzo:
          return 'Pranzo';
      default:
          return '';
  }

  }

}
