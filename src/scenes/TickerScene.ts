import {
    AnimatedSprite,
    Container,
    Graphics,
    Texture,
} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { HEIGHT, WIDTH } from "..";

export class TickerScene extends Container implements IUpdateable {
    private boyAnimated: AnimatedSprite; // Declara boyAnimated como una propiedad privada de la clase
    public speed:number = 50;
    private physBoy;

    constructor() {
        super();

        /*
        const boyWithHat: BoyWithHat = new BoyWithHat();

        boyWithHat.scale.set(0.5, 0.5);
        boyWithHat.x = 100;
        boyWithHat.y = 100;
        this.addChild(boyWithHat);
        */
        this.boyAnimated = new AnimatedSprite( // Asigna la instancia de AnimatedSprite a la propiedad boyAnimated
            [
                Texture.from("./boy/walk1.png"),
                Texture.from("./boy/walk2.png"),
                Texture.from("./boy/walk3.png"),
                Texture.from("./boy/walk4.png"),
                Texture.from("./boy/walk5.png"),
                Texture.from("./boy/walk6.png"),
            ],
            false
        );
        this.boyAnimated.play();
        this.boyAnimated.anchor.set(0.5,1);
        this.boyAnimated.animationSpeed = 0.1;
        this.addChild(this.boyAnimated); // Agrega boyAnimated al contenedor
            
        //Ticker.shared.add(this.update, this);
        this.physBoy = new PhysicsContainer();
            
        this.physBoy.speed.x = 150;
        this.physBoy.speed.y = 0;
        this.physBoy.acceleration.y = 50;
        

        this.addChild(this.physBoy);
        
        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();

        this.physBoy.addChild(this.boyAnimated);
        this.physBoy.addChild(auxZero);
    }


    /*
    private update(deltaFrame: number) {
        this.boyAnimated.update(deltaFrame); // Ahora puedes acceder a boyAnimated como una propiedad de la clase
        //console.log(deltaFrame, Ticker.shared.FPS);

        if(Keyboard.state.get("KeyD")){
            this.boyAnimated.x++;
        }
        if(Keyboard.state.get("KeyA")){
            this.boyAnimated.x--;
        }
    } */
    public update(deltaTime:number,deltaFrame:number){
        
        this.boyAnimated.update(deltaFrame);
        const dt = deltaTime / 1000; // Va a dar segundos
        //this.boyAnimated.x += this.speed * dt;
        this.physBoy.update(dt);

        if(this.physBoy.x + this.physBoy.width > WIDTH){
            this.physBoy.x = WIDTH - this.physBoy.width;
            this.physBoy.speed.x = Math.abs(this.physBoy.speed.x)*(-1);
            this.physBoy.scale.x = -1;
            this.boyAnimated.tint= 0x00ff00;

        }else if(this.physBoy.x < 0){
            this.physBoy.x = 0;
            this.physBoy.speed.x = Math.abs(this.physBoy.speed.x);
            this.physBoy.scale.x = 1;
            this.boyAnimated.tint = 0x802020;
        }


        if(this.physBoy.y > HEIGHT){
            this. physBoy.y = HEIGHT;
            this.physBoy.speed.y = -500 *Math.random();
            this.boyAnimated.tint = 0xffff00;
        }


    }
}