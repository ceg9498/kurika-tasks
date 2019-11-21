export type schedule = {
  useUTC:boolean,
  // year:number|string,
  // month:number|string,
  // dayOfMonth:number|string,
  hour:number|string,
  minute:number|string,
  dayOfWeek:number|string,
}

export class Schedule {
  useUTC:boolean;
  hour:number|string;
  minute:number|string;
  dayOfWeek:number|string;

  constructor(useUTC?:boolean, hour?:number|string, minute?:number|string, dayOfWeek?:number|string){
    this.useUTC = useUTC || undefined;
    this.hour = hour || undefined;
    this.minute = minute || undefined;
    this.dayOfWeek = dayOfWeek || undefined;
  }
}