import {
  AnimatedSprite,
  Container,
  Graphics,
  Texture,
  Text,
} from "pixi.js";
import { BoyWithHat } from "./boyWithHat";
import { EndPanel } from "./EndPanel";

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
        Texture.from("./boy/walk1.png"),
        Texture.from("./boy/walk2.png"),
        Texture.from("./boy/walk3.png"),
        Texture.from("./boy/walk4.png"),
        Texture.from("./boy/walk5.png"),
        Texture.from("./boy/walk6.png"),
      ],
      true
    );

    boyAnimated.animationSpeed = 0.1;
    boyAnimated.play();
    this.addChild(boyAnimated);

    //GRAPHICS
    const myGraph: Graphics = new Graphics();
    myGraph.moveTo(0, 0);
    myGraph.lineStyle({ color: 0xff00ff, width: 10, alpha: 1 });
    myGraph.lineTo(300, 500);
    myGraph.lineTo(300, 100);
    myGraph.lineTo(0, 0);

    myGraph.beginFill(0x00ff00, 1);
    myGraph.drawCircle(0, 0, 100);
    myGraph.endFill();
    myGraph.drawCircle(50, 50, 100);

    myGraph.position.set(1280 / 2, 720 / 2);
    //this.addChild(myGraph);

    //Text
    const myText: Text = new Text("Hello world", {
      fontSize: 150,
      fill: 0xff0000,
      fontFamily: "Comic Sans MS",
    });
    myText.text = "asd";
    myText.position.x = 500;
    myText.angle = 72;
    myText.scale.set(1);
    //this.addChild(myText);

    // Nine-Slice Plane
    const panelFinal: EndPanel = new EndPanel(3);
    this.addChild(panelFinal);
  }
}
