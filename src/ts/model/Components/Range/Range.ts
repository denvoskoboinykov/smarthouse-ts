import IRange from './IRange';

export default class Range implements IRange {
  private min: number;
  private max: number;
  private value: number;

  constructor(min: number, max: number, initialValue: number) {
    this.min = min;
    this.max = max;
    this.value = initialValue;
  }

  getMin(): number {
    return this.min;
  }

  getMax(): number {
    return this.max;
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    if (value < this.min || value > this.max) return;
    this.value = value;
  }

  increase(value: number): void {
    if (value <= 0) return;
    const expectedValue = this.value + value;
    if (expectedValue > this.max) {
      this.value = this.max;
      return;
    }
    this.value = expectedValue;
  }

  decrease(value: number): void {
    if (value <= 0) return;
    const expectedValue = this.value - value;
    if (expectedValue < this.min) {
      this.value = this.min;
      return;
    }
    this.value = expectedValue;
  }
}
