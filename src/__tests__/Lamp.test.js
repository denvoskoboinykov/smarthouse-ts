import Lamp from '../ts/model/Devices/Lamp/Lamp';
import Range from '../ts/model/Components/Range/Range';
import Color from '../ts/model/Components/Color/Color';

const shortid = require('shortid');

describe('Lamp brightness', () => {
  test('getBrightness() returns the current value', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 76);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    expect(lamp.getBrightness()).toBe(76);
  });

  test('setBrightness() sets the correct value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 76);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setBrightness(25);
    expect(lamp.getBrightness()).toBe(25);
  });

  test('setBrightness() sets the correct value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 33);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setBrightness(-678);
    expect(lamp.getBrightness()).toBe(33);
  });

  test('setBrightness() sets the correct value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 24);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setBrightness(101);
    expect(lamp.getBrightness()).toBe(24);
  });

  test('increaseBrightness() correctly increases value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 55);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseBrightness(26);
    expect(lamp.getBrightness()).toBe(81);
  });

  test('increaseBrightness() correctly increases value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 55);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseBrightness(666);
    expect(lamp.getBrightness()).toBe(100);
  });

  test('increaseBrightness(agr) does not change value, if agr < 0', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 23);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseBrightness(-666);
    expect(lamp.getBrightness()).toBe(23);
  });

  test('decreaseBrightness() correctly decreases value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 95);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseBrightness(1);
    expect(lamp.getBrightness()).toBe(94);
  });

  test('decreaseBrightness() correctly decreases value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 0);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseBrightness(10500);
    expect(lamp.getBrightness()).toBe(0);
  });

  test('decreaseBrightness(agr) does not change value, if agr < 0', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 44);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseBrightness(-1);
    expect(lamp.getBrightness()).toBe(44);
  });
});

describe('Lamp RedColor', () => {
  test('getRed() returns the current value', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 76);

    const color = new Color(
      new Range(0, 255, 166),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    expect(lamp.getRed()).toBe(166);
  });

  test('setRed() sets the correct value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 76);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setRed(67);
    expect(lamp.getRed()).toBe(67);
  });

  test('setRed() sets the correct value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 33);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setRed(-678);
    expect(lamp.getRed()).toBe(255);
  });

  test('setRed() sets the correct value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 24);

    const color = new Color(
      new Range(0, 255, 9),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.setRed(1010);
    expect(lamp.getRed()).toBe(9);
  });

  test('increaseRed() correctly increases value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 55);

    const color = new Color(
      new Range(0, 255, 100),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseRed(77);
    expect(lamp.getRed()).toBe(177);
  });

  test('increaseRed() correctly increases value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 55);

    const color = new Color(
      new Range(0, 255, 102),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseRed(666);
    expect(lamp.getRed()).toBe(255);
  });

  test('increaseRed(agr) does not change value, if agr < 0', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 23);

    const color = new Color(
      new Range(0, 255, 89),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.increaseRed(-543);
    expect(lamp.getRed()).toBe(89);
  });

  test('decreaseRed() correctly decreases value in range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 95);

    const color = new Color(
      new Range(0, 255, 255),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseRed(1);
    expect(lamp.getRed()).toBe(254);
  });

  test('decreaseRed() correctly decreases value out of range', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 0);

    const color = new Color(
      new Range(0, 255, 76),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseRed(10500);
    expect(lamp.getRed()).toBe(0);
  });

  test('decreaseRed(agr) does not change value, if agr < 0', () => {
    const lampId = shortid.generate();

    const brightnessLamp = new Range(0, 100, 44);

    const color = new Color(
      new Range(0, 255, 12),
      new Range(0, 255, 255),
      new Range(0, 255, 255),
    );

    const lamp = new Lamp(lampId, 'RGB-Lamp-143', brightnessLamp, color);

    lamp.decreaseRed(-11);
    expect(lamp.getRed()).toBe(12);
  });
});
