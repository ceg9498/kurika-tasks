export type interval = {
  amount: number|string,
  unit: string,
}

export class Interval {
  amount:number|string;
  unit:string;

  constructor(amount?:number|string, unit?:string){
    this.amount = amount || undefined;
    this.unit = unit || undefined;
  }
}