import Device from '../Device/Device';
import IRange from '../../Components/Range/IRange';

export default class Television extends Device {
  private readonly screenDiagonal: number;
  private volume: IRange;
  private saturation: IRange;
  private brightness: IRange;

  constructor(
    id: string,
    name: string,
    screenDiagonal: number,
    volume: IRange,
    saturation: IRange,
    brightness: IRange,
  ) {
    super(id, name);
    this.screenDiagonal = screenDiagonal;
    this.volume = volume;
    this.saturation = saturation;
    this.brightness = brightness;
  }

  public getScreenDiagonal(): number {
    return this.screenDiagonal;
  }

  public getVolume(): number {
    return this.volume.getValue();
  }

  public getSaturation(): number {
    return this.saturation.getValue();
  }

  public getBrightness(): number {
    return this.brightness.getValue();
  }

  public setVolume(value: number): void {
    this.volume.setValue(value);
  }

  public setSaturation(value: number): void {
    this.saturation.setValue(value);
  }

  public setBrightness(value: number): void {
    this.brightness.setValue(value);
  }

  public increaseVolume(value: number): void {
    this.volume.increase(value);
  }

  public decreaseVolume(value: number): void {
    this.volume.decrease(value);
  }

  public increaseSaturation(value: number): void {
    this.saturation.increase(value);
  }

  public decreaseSaturation(value: number): void {
    this.saturation.decrease(value);
  }

  public increaseBrightness(value: number): void {
    this.brightness.increase(value);
  }

  public decreaseBrightness(value: number): void {
    this.brightness.decrease(value);
  }
}
