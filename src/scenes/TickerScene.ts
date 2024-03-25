import {
    Container, Texture, TilingSprite,
} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";
import { Platform } from "../game/Platform";
import { checkCollision } from "../game/IHitbox";

export class TickerScene extends Container implements IUpdateable {

    private background: TilingSprite;
    private playerBoy: Player; // Declara boyAnimated como una propiedad privada de la clase
    private plats:Platform[];

    private world: Container;

    constructor() {
        super();

        this.world = new Container();

        this.background = new TilingSprite(Texture.from("./background.jpg"),WIDTH*3,HEIGHT);
        //this.background.scale.set(0.5,0.35);
        this.addChild(this.background);

        this.playerBoy = new Player();
        this.world.addChild(this.playerBoy);
        
        this.plats = [];
        const plat: Platform = new Platform();
        this.plats.push(plat);
        const plat1: Platform = new Platform();
        this.plats.push(plat1);
        this.world.addChild(plat,plat1);
        plat.position.set(200,600);
        plat1.position.set(800,600);

        this.addChild(this.world);
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
            this.playerBoy.speed.y = 0;
            this.playerBoy.canJump = true;
            
        }

        for(let platform of this.plats){
            console.log(checkCollision(this.playerBoy, platform));
            const overlap = checkCollision(this.playerBoy,platform);
            if(overlap != null){

                this.playerBoy.separate(overlap, platform.position)
                
            }
        }


        this.world.x = -this.playerBoy.x * this.worldTransform.a + WIDTH/4;
        this.background.tilePosition.x = this.world.x * 0.5;
    }
}