import Device from '../Device/Device';
import IRange from '../../Components/Range/IRange';
import IColor from '../../Components/Color/IColor';

export default class Lamp extends Device {
  private brightness: IRange;
  private color: IColor;

  public constructor(
    id: string,
    name: string,
    brightness: IRange,
    color: IColor,
  ) {
    super(id, name);
    this.brightness = brightness;
    this.color = color;
  }

  public getBrightness(): number {
    return this.brightness.getValue();
  }

  public getRed(): number {
    return this.color.getRed();
  }

  public getGreen(): number {
    return this.color.getGreen();
  }

  public getBlue(): number {
    return this.color.getBlue();
  }

  public setBrightness(value: number): void {
    this.brightness.setValue(value);
  }

  public setRed(value: number): void {
    this.color.setRed(value);
  }

  public setGreen(value: number): void {
    this.color.setGreen(value);
  }

  public setBlue(value: number): void {
    this.color.setBlue(value);
  }

  public increaseBrightness(value: number): void {
    this.brightness.increase(value);
  }

  public decreaseBrightness(value: number): void {
    this.brightness.decrease(value);
  }

  public increaseRed(value: number): void {
    this.color.increaseRed(value);
  }

  public decreaseRed(value: number): void {
    this.color.decreaseRed(value);
  }

  public increaseGreen(value: number): void {
    this.color.increaseGreen(value);
  }

  public decreaseGreen(value: number): void {
    this.color.decreaseGreen(value);
  }

  public increaseBlue(value: number): void {
    this.color.increaseBlue(value);
  }

  public decreaseBlue(value: number): void {
    this.color.decreaseBlue(value);
  }
}
