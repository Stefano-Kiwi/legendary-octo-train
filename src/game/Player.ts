import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";
import { Keyboard } from "../utils/Keyboard";

export class Player extends PhysicsContainer{


    private static readonly GRAVITY = 400;
    private static readonly MOVE_SPEED = 350;
    private static readonly JUMP_SPEED = 500;
    
    private boyAnimated:AnimatedSprite;
    public canJump = true;
    private hitbox:Graphics;


    constructor(){
        super();

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
        this.boyAnimated.scale.set(3);
        this.boyAnimated.anchor.set(0.5,1);
        this.boyAnimated.animationSpeed = 0.1;
        this.addChild(this.boyAnimated); // Agrega boyAnimated al contenedor


        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();
        
        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0.3);
        this.hitbox.drawRect(0,0,200,300);
        this.hitbox.endFill();
        this.hitbox.position.set(-100,-300);
 
        this.addChild(this.boyAnimated);
        this.addChild(auxZero);
        this.addChild(this.hitbox);

        this.acceleration.y = Player.GRAVITY;

        Keyboard.down.on("ArrowUp",this.jump,this);
    }

    public override destroy(options:any){
        super.destroy(options);
        Keyboard.down.off("ArrowUp",this.jump);
    }


    public override update(deltaMS:number){
        super.update(deltaMS/1000);
        this.boyAnimated.update(deltaMS/(1000/60));
        console.log(deltaMS/ (1000/60));

        if(Keyboard.state.get("ArrowRight")){
            this.speed.x = Player.MOVE_SPEED;
            this.scale.x = 1;
        }else if(Keyboard.state.get("ArrowLeft")){
            this.speed.x = -Player.MOVE_SPEED;
            this.scale.x = -1;
        }else{
            this.speed.x = 0;
        }

        if(Keyboard.state.get("ArrowDown")){
            this.acceleration.y = Player.GRAVITY*2;
        }else{
            this.acceleration.y = Player.GRAVITY;
        }
        /*
        if(Keyboard.state.get("ArrowUp") && this.canJump){
            this.jump();
        }
        */
    }

    private jump(){
        if(this.canJump){
            this.canJump = false;
            this.speed.y = -Player.JUMP_SPEED;
        }
    }
    
    public getHitbox(): Rectangle{
        return this.hitbox.getBounds();
    }

    public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
        if(overlap.width < overlap.height){

            if(this.x > platform.x){
                this.x -= overlap.width;

            }else if(this.x < platform.x){
                this.x -= overlap.width;
            }
            
            if(this.x > platform.x){
                this.x -= overlap.width;

            }else if(this.x < platform.x){
                this.x -= overlap.width;
            }


        }else{
            if(this.y > platform.y){
                this.y -= overlap.height;
                this.speed.y = 0;
                this.canJump = true;

            }else if(this.y < platform.y){
                this.y += overlap.height;
            }


        }
    }
}