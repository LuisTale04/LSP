import Rectangle from "./rectangle";
import Shape from "./shape";

export default class Square implements Shape {
  protected side: number = 0;

  constructor(side: number = 0) {
    this.side = side;
  }

  public setSide(side: number): void {
    this.side = side;
  }

  public getArea(): number {
    return this.side ** 2;
  }
}
