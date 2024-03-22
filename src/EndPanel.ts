import { Container, NineSlicePlane, Texture, Text, Sprite} from "pixi.js";

export class EndPanel extends Container {
  constructor(puntos:number) {
    super();

    //Nine-Slice Plane
    const panel: NineSlicePlane = new NineSlicePlane(
      Texture.from("./ui/MiniPanel01.jpg"),
      35,
      35,
      35,
      35
    );
    this.addChild(panel);
    panel.width = 500;
    panel.height = 500;
    panel.scale.set(1);
    panel.position.x = 400;
    panel.position.y = 200;

    const titulo: Text = new Text("Hello world", {
      fontSize: 100,
      fill: 0x00ffff,
      fontFamily: "Comic Sans MS",
    });
    titulo.scale.set(0.5);
    titulo.position.set(440, 250);
    titulo.text = "Nivel completado!";
    this.addChild(titulo);

    const punto1 = Sprite.from("./ui/Icon08.png");
    punto1.position.set(480,400);
    const punto2 = Sprite.from("./ui/Icon08.png");
    punto2.position.set(580,400);
    const punto3 = Sprite.from("./ui/Icon08.png");
    punto3.position.set(680,400);
    switch(puntos){
      case 1: 
      this.addChild(punto1);
      break;
      case 2:
        this.addChild(punto1);
        this.addChild(punto2);
        break;
        case 3:
          this.addChild(punto1);
          this.addChild(punto2);
          this.addChild(punto3);
          break;
    }

    const home = Sprite.from("./ui/Icon04.png");
    this.addChild(home);
    home.position.set(440,590);



    const siguiente = Sprite.from("./ui/play1.png");
    this.addChild(siguiente);
    siguiente.position.set(750,610);
   /* siguiente.on("mousedown", (event: FederatedPointerEvent) => {
      this.onMouseDown(event); // Llama a la función onMouseDown con el evento como argumento
    });
    siguiente.interactive = true;
    */

  

  }
  /*
  private onMouseDown(event: FederatedPointerEvent): void {
    console.log("mouse down", "ahora");
  }
  */
}
