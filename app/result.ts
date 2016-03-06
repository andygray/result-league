export class Result {

  constructor(public id: number, public name: string, public r1: number, public r2: number, public r3: number, public r4: number) {}
  
  total() : number {
    return this.r1 + this.r2 + this.r3 + this.r4;
  }
}