import IColor from './IColor';
import IRange from '../Range/IRange';

export default class Color implements IColor {
  private red: IRange;
  private green: IRange;
  private blue: IRange;

  constructor(red: IRange, green: IRange, blue: IRange) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  public getRed(): number {
    return this.red.getValue();
  }

  public getGreen(): number {
    return this.green.getValue();
  }

  public getBlue(): number {
    return this.blue.getValue();
  }

  public setRed(value: number): void {
    this.red.setValue(value);
  }

  public setGreen(value: number): void {
    this.green.setValue(value);
  }

  public setBlue(value: number): void {
    this.blue.setValue(value);
  }

  public increaseRed(value: number): void {
    this.red.increase(value);
  }

  public decreaseRed(value: number): void {
    this.red.decrease(value);
  }

  public increaseGreen(value: number): void {
    this.green.increase(value);
  }

  public decreaseGreen(value: number): void {
    this.green.decrease(value);
  }

  public increaseBlue(value: number): void {
    this.blue.increase(value);
  }

  public decreaseBlue(value: number): void {
    this.blue.decrease(value);
  }
}
