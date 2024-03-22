import { Assets, Container, Sprite } from "pixi.js";

export class BoyWithHat extends Container {
  constructor() {
    super();

    Assets.load('boy').then((boyTexture) => {
      const boy: Sprite = Sprite.from(boyTexture);
      boy.scale.set(5,5);
      this.addChild(boy);
    });

    Assets.load('hat').then((hatTexture) => {
      const hat: Sprite = Sprite.from(hatTexture);
      hat.scale.set(1.1,1.1);
      hat.position.set(-90,65);
      hat.angle = -30;
      this.addChild(hat);
    })

  }
}
