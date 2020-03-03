'use strict';
import SmartHouse from './ts/model/SmartHouse';
import Range from './ts/model/Components/Range/Range';
import Color from './ts/model/Components/Color/Color';
import Television from './ts/model/Devices/Television/Television';
import Lamp from './ts/model/Devices/Lamp/Lamp';
import IDevice from './ts/model/Devices/Device/IDevice';

const shortid = require('shortid');

const house: SmartHouse = new SmartHouse(shortid.generate(), 'Cool house');

// some tests
const volume: Range = new Range(0, 100, 50);
const saturation: Range = new Range(0, 100, 50);
const brightnessTV: Range = new Range(0, 100, 100);

const brightnessLamp: Range = new Range(0, 100, 100);
const color: Color = new Color(
  new Range(0, 255, 255),
  new Range(0, 255, 255),
  new Range(0, 255, 255),
);

const tvId: string = shortid.generate();

const television: Television = new Television(
  tvId,
  'LG',
  35,
  volume,
  saturation,
  brightnessTV,
);

const lampId: string = shortid.generate();

const lamp: Lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

house.addDevice(television);
house.addDevice(lamp);

const tvFromHouse: IDevice = house.selectDevice(tvId);

tvFromHouse.enable();

(tvFromHouse as Television).setVolume(73);
(tvFromHouse as Television).decreaseBrightness(18);
(tvFromHouse as Television).increaseSaturation(999);
tvFromHouse.toggleState();
//house.devices[0].disable();

console.log(tvFromHouse);

//house.devices[1].enable();
const lampFromHouse: IDevice = house.selectDevice(lampId);

(lampFromHouse as Lamp).decreaseBrightness(841250);
(lampFromHouse as Lamp).setBlue(500);
(lampFromHouse as Lamp).decreaseGreen(-150);
(lampFromHouse as Lamp).setRed(177);

console.log(lampFromHouse);

house.delayAction(
  () => {
    lampFromHouse.enable();
  },
  2000,
  () => {
    house.delayAction(
      () => {
        lampFromHouse.enable();
      },
      2000,
      () => {
        console.log(house.selectDevice(lampId));
      },
    );
  },
);
