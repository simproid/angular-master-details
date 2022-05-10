
export class EventDetail {
    constructor(public id: number, public name:string, public description:string, public type: EventType, public data:Date, public partecipanti: Partecipante[]) {

    }
    static build(event: EventDetail){
        return new EventDetail(event.id,event.name, event.description, event.type, new Date(event.data), event.partecipanti.map(partecipante => Partecipante.build(partecipante)));
    }
}

export class Partecipante {
    constructor(public id:number, public name:string) {

    }

    static build(partecipante: Partecipante){
        return new Partecipante(partecipante.id,partecipante.name);
    }
}

export enum EventType {
    cena,
    pranzo,
    aperitivo,
}