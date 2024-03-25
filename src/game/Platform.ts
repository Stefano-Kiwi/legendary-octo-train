import { Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "./IHitbox";

export class Platform extends Container implements IHitbox{
    private hitbox:Graphics;
    
    constructor(){
        super();
        const spr = Sprite.from("./platform.png");
        this.addChild(spr);

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0.3);
        this.hitbox.drawRect(0,0,430,75);
        this.hitbox.endFill();
        this.hitbox.position.set(0,50);

        this.addChild(this.hitbox);
    }
    
    public getHitbox(): Rectangle{
        return this.hitbox.getBounds();
    }
}