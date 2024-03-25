import { Container, Graphics, Sprite} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { HEIGHT, WIDTH } from "..";

export class MemoriesDvd extends Container implements IUpdateable{

    private dvd: Sprite;
    private ranita: Sprite;
    private physRanita: PhysicsContainer;
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
        
        // RANITA
        this.ranita = Sprite.from("./ranita.png");
        this.ranita.anchor.set(0.5,0.8);
        this.addChild(this.ranita);

        this.physRanita = new PhysicsContainer();
        this.physRanita.position.set(800,800);
        this.physRanita.speed.x = 900;
        this.physRanita.speed.y = 0;
        this.physRanita.acceleration.y = 500;
        this.addChild(this.physRanita);

        this.physDvd.addChild(this.dvd,auxZero,this.auxOne);
        this.physRanita.addChild(this.ranita);
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
        
        // RANITA
        this.physRanita.update(dt);

        // LIMITE DERECHA
        if(this.physRanita.x + this.physRanita.width > WIDTH){
            this.physRanita.x = WIDTH - this.physRanita.width;
            this.physRanita.speed.x = Math.abs(this.physRanita.speed.x)*(-1);
            this.physRanita.scale.x = -1;
        }else if(this.physRanita.x < 0){ // LIMITE IZQUIERDA
            this.physRanita.x = 0;
            this.physRanita.speed.x = Math.abs(this.physRanita.speed.x);
            this.physRanita.scale.x = 1;
        }

        //LIMITE INFERIOR
        if(this.physRanita.y > HEIGHT){
            this.physRanita.y = HEIGHT;
            this.physRanita.speed.y = -1500 *Math.random();
            this.ranita.tint = 0x00ff99;
        }else if(this.physRanita.y-170 < 0){   //LIMITE SUPERIOR
            console.log("posicion en y, ranita=",this.physRanita.y);
            this.physRanita.y = 150;
            this.physRanita.speed.y = 1500 * Math.random();
        }
    }

}