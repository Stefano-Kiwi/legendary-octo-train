import { AnimatedSprite, Container, Texture } from "pixi.js";
import {BoyWithHat } from "./boyWithHat";

export class Scene extends Container {
  constructor() {
    super();

    const boyWithHat: BoyWithHat = new BoyWithHat();

    boyWithHat.scale.set(0.5, 0.5);
    boyWithHat.x = 100;
    boyWithHat.y = 100;
    this.addChild(boyWithHat);

    const boyAnimated: AnimatedSprite = new AnimatedSprite(
      [
        Texture.from("./adventurer/walk-01.png")

      ]
    );

    this.addChild(boyAnimated);
  }
}
