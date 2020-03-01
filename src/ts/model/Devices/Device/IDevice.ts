export default interface Device {
  [x: string]: any;

  getId(): string;

  getState(): boolean;

  getName(): string;

  setName(name: string): void;

  toggleState(): void;

  disable(): void;

  enable(): void;
}
