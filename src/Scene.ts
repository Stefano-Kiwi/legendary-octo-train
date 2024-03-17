import { Container } from "pixi.js";
import {AdventurerWithHat } from "./AdventurerWithHat";

export class Scene extends Container {
  constructor() {
    super();

    const skeletonWithHat: AdventurerWithHat = new AdventurerWithHat();

    skeletonWithHat.scale.set(0.5, 0.5);
    skeletonWithHat.x = 100;
    skeletonWithHat.y = 100;

    this.addChild(skeletonWithHat);
  }
}
