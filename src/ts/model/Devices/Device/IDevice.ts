export default interface Device {
  getId(): string;

  getState(): boolean;

  getName(): string;

  setName(name: string): void;

  toggleState(): void;

  disable(): void;

  enable(): void;
}
