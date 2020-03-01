import ISmartHouse from './ISmartHouse';
import IDevice from './Devices/Device/IDevice';

export default class SmartHouse implements ISmartHouse {
  private id: string;
  private name: string;
  private devices: Array<IDevice>;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.devices = [];
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDevices(): Array<IDevice> {
    return this.devices;
  }

  selectDevice(id: string): IDevice {
    return this.devices.find(device => device.getId() === id);
  }

  addDevice(device: IDevice): void {
    this.devices.push(device);
  }

  deleteDevice(id: string): void {
    this.devices = this.devices.filter(device => device.getId() !== id);
  }

  enableAllDevuces(): void {
    this.devices.forEach(device => device.enable());
  }

  disableAllDevices(): void {
    this.devices.forEach(device => device.disable());
  }

  delayAction(action: Function, delay: number, callback: Function): void {
    setTimeout(() => {
      action();
      callback();
    }, delay);
  }
}
