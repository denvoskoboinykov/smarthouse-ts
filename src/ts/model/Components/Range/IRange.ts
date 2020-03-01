export default interface IRange {
  getMin(): number;

  getMax(): number;

  getValue(): number;

  setValue(value: number): void;

  increase(value: number): void;

  decrease(value: number): void;
}
