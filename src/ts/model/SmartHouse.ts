import ISmartHouse from './ISmartHouse';
import IDevice from './Devices/Device/IDevice';

export default class SmartHouse implements ISmartHouse {
  private id: string;
  private name: string;
  private devices: Array<IDevice>;

  public constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.devices = [];
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDevices(): Array<IDevice> {
    return this.devices;
  }

  public selectDevice(id: string): IDevice {
    return this.devices.find(device => device.getId() === id);
  }

  public addDevice(device: IDevice): void {
    this.devices.push(device);
  }

  public deleteDevice(id: string): void {
    this.devices = this.devices.filter(device => device.getId() !== id);
  }

  public enableAllDevuces(): void {
    this.devices.forEach(device => device.enable());
  }

  public disableAllDevices(): void {
    this.devices.forEach(device => device.disable());
  }

  public delayAction(id: string, delay: number): Promise<IDevice> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.selectDevice(id));
      }, delay);
    });
  }
}
