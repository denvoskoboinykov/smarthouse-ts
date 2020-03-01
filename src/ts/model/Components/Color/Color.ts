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

  getRed(): number {
    return this.red.getValue();
  }

  getGreen(): number {
    return this.green.getValue();
  }

  getBlue(): number {
    return this.blue.getValue();
  }

  setRed(value: number): void {
    this.red.setValue(value);
  }

  setGreen(value: number): void {
    this.green.setValue(value);
  }

  setBlue(value: number): void {
    this.blue.setValue(value);
  }

  increaseRed(value: number): void {
    this.red.increase(value);
  }

  decreaseRed(value: number): void {
    this.red.decrease(value);
  }

  increaseGreen(value: number): void {
    this.green.increase(value);
  }

  decreaseGreen(value: number): void {
    this.green.decrease(value);
  }

  increaseBlue(value: number): void {
    this.blue.increase(value);
  }

  decreaseBlue(value: number): void {
    this.blue.decrease(value);
  }
}
