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

  getScreenDiagonal(): number {
    return this.screenDiagonal;
  }

  getVolume(): number {
    return this.volume.getValue();
  }

  getSaturation(): number {
    return this.saturation.getValue();
  }

  getBrightness(): number {
    return this.brightness.getValue();
  }

  setVolume(value: number): void {
    this.volume.setValue(value);
  }

  setSaturation(value: number): void {
    this.saturation.setValue(value);
  }

  setBrightness(value: number): void {
    this.brightness.setValue(value);
  }

  increaseVolume(value: number): void {
    this.volume.increase(value);
  }

  decreaseVolume(value: number): void {
    this.volume.decrease(value);
  }

  increaseSaturation(value: number): void {
    this.saturation.increase(value);
  }

  decreaseSaturation(value: number): void {
    this.saturation.decrease(value);
  }

  increaseBrightness(value: number): void {
    this.brightness.increase(value);
  }

  decreaseBrightness(value: number): void {
    this.brightness.decrease(value);
  }
}
