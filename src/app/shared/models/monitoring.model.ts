import { Display } from "./dislpay.model";

export class Monitoring {
    id: number;
    dateTime : Date;
    typeEvent: boolean;
    display?: Display;
    displayId? : number;

    constructor(id: number, dateTime: Date, typeEvent: boolean, display?: Display, displayId?: number) {
        this.id = id;
        this.dateTime = dateTime;
        this.typeEvent = typeEvent;
        this.display= display;
        this.displayId = displayId;
    }
}