import Shape from "./shape";

export default class Rectangle implements Shape {
  protected height: number = 0;
  protected width: number = 0;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public getArea(): number {
    return this.height * this.width;
  }
}
