import { Container, Graphics, Sprite} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { HEIGHT, WIDTH } from "..";

export class MemoriesDvd extends Container implements IUpdateable{

    private dvd: Sprite;
    private physDvd: PhysicsContainer;
    private auxOne: Graphics;
    constructor(){
        super();

        this.dvd = Sprite.from("./logodvd.png");
        this.dvd.anchor.set(0.5,0.8);
        this.addChild(this.dvd);

        this.physDvd = new PhysicsContainer();
        this.physDvd.position.set(500,500);
        this.physDvd.speed.x = 500;
        this.physDvd.speed.y = 0;
        this.physDvd.acceleration.y = 500;
        this.addChild(this.physDvd);

        const auxZero = new Graphics();
        auxZero.beginFill(0x0000ff);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();

        this.auxOne = new Graphics();
        this.auxOne.beginFill(0x0000ff);
        this.auxOne.drawCircle(0,0,10);
        this.auxOne.endFill();
        this.auxOne.y -= 150;
        
        this.physDvd.addChild(this.dvd,auxZero,this.auxOne);
    }
    update(deltaTime: number, _deltaFrame?: number | undefined): void {
        const dt = deltaTime / 1000; // Va a dar segundos
        //this.boyAnimated.x += this.speed * dt;
        this.physDvd.update(dt);

        // LIMITE DERECHA
        if(this.physDvd.x + this.physDvd.width > WIDTH){
            this.physDvd.x = WIDTH - this.physDvd.width;
            this.physDvd.speed.x = Math.abs(this.physDvd.speed.x)*(-1);
            this.dvd.tint= 0xff0000;
        }else if(this.physDvd.x < 0){ // LIMITE IZQUIERDA
            this.physDvd.x = 0;
            this.physDvd.speed.x = Math.abs(this.physDvd.speed.x);
            this.physDvd.scale.x = 1;
            this.dvd.tint = 0x802020;
        }

        //LIMITE INFERIOR
        if(this.physDvd.y > HEIGHT){
            this.physDvd.y = HEIGHT;
            this.physDvd.speed.y = -1500 *Math.random();
            this.dvd.tint = 0x00ff99;
        }else if(this.physDvd.y-170 < 0){   //LIMITE SUPERIOR
            console.log("posicion en y=",this.physDvd.y);
            this.physDvd.y = 150;
            this.physDvd.speed.y = 1500 * Math.random();
        }
        

    }

}