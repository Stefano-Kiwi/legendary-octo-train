import { Container, Sprite } from "pixi.js";

export class AdventurerWithHat extends Container {
  constructor() {
    super();

    const adventurer: Sprite = Sprite.from("./adventurer/aventurero.png");
    adventurer.scale.set(5,5);
    const hat: Sprite = Sprite.from("./hat.png");

    hat.scale.set(1.1,1.1);
    hat.position.set(-90, 65);
    hat.angle = -30;

    this.addChild(adventurer);
    this.addChild(hat);

  }
}
