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

  public getId(): string {
    return this.id;
  }

  public getState(): boolean {
    return this.state;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public toggleState(): void {
    this.state = !this.state;
  }

  public disable(): void {
    this.state = false;
  }

  public enable(): void {
    this.state = true;
  }
}
