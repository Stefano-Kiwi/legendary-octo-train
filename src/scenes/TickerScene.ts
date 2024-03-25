import {
    Container, Sprite,
} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";
import { Platform } from "../game/Platform";
import { checkCollision } from "../game/IHitbox";

export class TickerScene extends Container implements IUpdateable {

    private background: Sprite;
    private playerBoy: Player; // Declara boyAnimated como una propiedad privada de la clase
    private plats:Platform[];

    constructor() {
        super();
        this.background = Sprite.from('./background.jpg');
        this.background.scale.set(0.5,0.35);
        this.addChild(this.background);

        this.playerBoy = new Player();
        this.addChild(this.playerBoy);
        
        this.plats = [];
        const plat: Platform = new Platform();
        this.plats.push(plat);
        const plat1: Platform = new Platform();
        this.plats.push(plat1);
        this.addChild(plat,plat1);
        plat.position.set(200,600);
        plat1.position.set(800,600);
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
        
        this.playerBoy.update(deltaFrame);
        const dt = deltaTime ; // Va a dar segundos
        //this.boyAnimated.x += this.speed * dt;
        this.playerBoy.update(dt);

        if(this.playerBoy.x > WIDTH){
            this.playerBoy.x = WIDTH;

        }else if(this.playerBoy.x < 0){
            this.playerBoy.x = 0;
        }


        if(this.playerBoy.y > HEIGHT){
            this. playerBoy.y = HEIGHT;
            this.playerBoy.canJump = true;
            
        }

        for(let platform of this.plats){
            console.log(checkCollision(this.playerBoy, platform));
            const overlap = checkCollision(this.playerBoy,platform);
            if(overlap != null){
                if(overlap.width < overlap.height){
                    if(this.playerBoy.speed.x >0){
                        this.playerBoy.x -= overlap.width;

                    }else{
                        this.playerBoy.x += overlap.width;
                    }

                }else{
                    this.playerBoy.y -= overlap.height;

                }
            }
        }
    }
}