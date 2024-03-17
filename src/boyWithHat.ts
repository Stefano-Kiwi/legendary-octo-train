import { Container, Sprite } from "pixi.js";

export class BoyWithHat extends Container {
  constructor() {
    super();

    const boy: Sprite = Sprite.from("./boy.png");
    boy.scale.set(5,5);
    const hat: Sprite = Sprite.from("./hat.png");

    hat.scale.set(1.1,1.1);
    hat.position.set(-90, 65);
    hat.angle = -30;

    this.addChild(boy);
    this.addChild(hat);

  }
}
