import IDevice from './Devices/Device/IDevice';

export default interface ISmartHouse {
  getId(): string;

  getName(): string;

  getDevices(): Array<IDevice>;

  selectDevice(id: string): void;

  addDevice(device: IDevice): void;

  deleteDevice(id: string): void;

  enableAllDevuces(): void;

  disableAllDevices(): void;

  delayAction(action: Function, delay: number, callback: Function): void;
}
