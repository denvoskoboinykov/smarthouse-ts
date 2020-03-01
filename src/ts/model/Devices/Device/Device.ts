import IDevice from './IDevice';

export default abstract class Device implements IDevice {
  private id: string;
  private name: string;
  private state: boolean;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.state = false;
  }

  getId(): string {
    return this.id;
  }

  getState(): boolean {
    return this.state;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  toggleState(): void {
    this.state = !this.state;
  }

  disable(): void {
    this.state = false;
  }

  enable(): void {
    this.state = true;
  }
}
