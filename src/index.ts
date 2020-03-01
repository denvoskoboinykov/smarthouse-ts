'use strict';
import SmartHouse from './ts/model/SmartHouse';
import Range from './ts/model/Components/Range/Range';
import Color from './ts/model/Components/Color/Color';
import Television from './ts/model/Devices/Television/Television';
import Lamp from './ts/model/Devices/Lamp/Lamp';

const shortid = require('shortid');

const house = new SmartHouse(shortid.generate(), 'Cool house');

// some tests
const volume = new Range(0, 100, 50);
const saturation = new Range(0, 100, 50);
const brightnessTV = new Range(0, 100, 100);

const brightnessLamp = new Range(0, 100, 100);
const color = new Color(
  new Range(0, 255, 255),
  new Range(0, 255, 255),
  new Range(0, 255, 255),
);

const tvId = shortid.generate();

const television = new Television(
  tvId,
  'LG',
  35,
  volume,
  saturation,
  brightnessTV,
);

const lampId = shortid.generate();

const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

house.addDevice(television);
house.addDevice(lamp);

const tvFromHouse = house.selectDevice(tvId);

tvFromHouse.enable();

tvFromHouse.setVolume(73);
tvFromHouse.decreaseBrightness(18);
tvFromHouse.increaseSaturation(999);
tvFromHouse.toggleState();
//house.devices[0].disable();

console.log(tvFromHouse);

//house.devices[1].enable();
const lampFromHouse = house.selectDevice(lampId);

lampFromHouse.decreaseBrightness(841250);
lampFromHouse.setBlue(500);
lampFromHouse.decreaseGreen(-150);
lampFromHouse.setRed(177);

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
