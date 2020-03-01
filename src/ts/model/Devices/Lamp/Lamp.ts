import Device from '../Device/Device';
import IRange from '../../Components/Range/IRange';
import IColor from '../../Components/Color/IColor';

export default class Lamp extends Device {
  private brightness: IRange;
  private color: IColor;

  constructor(id: string, name: string, brightness: IRange, color: IColor) {
    super(id, name);
    this.brightness = brightness;
    this.color = color;
  }

  getBrightness(): number {
    return this.brightness.getValue();
  }

  getRed(): number {
    return this.color.getRed();
  }

  getGreen(): number {
    return this.color.getGreen();
  }

  getBlue(): number {
    return this.color.getBlue();
  }

  setBrightness(value: number): void {
    this.brightness.setValue(value);
  }

  setRed(value: number): void {
    this.color.setRed(value);
  }

  setGreen(value: number): void {
    this.color.setGreen(value);
  }

  setBlue(value: number): void {
    this.color.setBlue(value);
  }

  increaseBrightness(value: number): void {
    this.brightness.increase(value);
  }

  decreaseBrightness(value: number): void {
    this.brightness.decrease(value);
  }

  increaseRed(value: number): void {
    this.color.increaseRed(value);
  }

  decreaseRed(value: number): void {
    this.color.decreaseRed(value);
  }

  increaseGreen(value: number): void {
    this.color.increaseGreen(value);
  }

  decreaseGreen(value: number): void {
    this.color.decreaseGreen(value);
  }

  increaseBlue(value: number): void {
    this.color.increaseBlue(value);
  }

  decreaseBlue(value: number): void {
    this.color.decreaseBlue(value);
  }
}
