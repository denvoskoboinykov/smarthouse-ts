import IRange from './IRange';

export default class Range implements IRange {
  private min: number;
  private max: number;
  private value: number;

  public constructor(min: number, max: number, initialValue: number) {
    this.min = min;
    this.max = max;
    this.value = initialValue;
  }

  public getMin(): number {
    return this.min;
  }

  public getMax(): number {
    return this.max;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    if (value < this.min || value > this.max) return;
    this.value = value;
  }

  public increase(value: number): void {
    if (value <= 0) return;
    const expectedValue = this.value + value;
    if (expectedValue > this.max) {
      this.value = this.max;
      return;
    }
    this.value = expectedValue;
  }

  public decrease(value: number): void {
    if (value <= 0) return;
    const expectedValue = this.value - value;
    if (expectedValue < this.min) {
      this.value = this.min;
      return;
    }
    this.value = expectedValue;
  }
}
