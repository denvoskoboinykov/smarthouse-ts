export default interface IColor {
  getRed(): number;

  getGreen(): number;

  getBlue(): number;

  setRed(value: number): void;

  setGreen(value: number): void;

  setBlue(value: number): void;

  increaseRed(value: number): void;

  decreaseRed(value: number): void;

  increaseGreen(value: number): void;

  decreaseGreen(value: number): void;

  increaseBlue(value: number): void;

  decreaseBlue(value: number): void;
}
