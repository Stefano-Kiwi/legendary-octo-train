import { AssetsManifest } from "pixi.js";

export const manifest: AssetsManifest = {
    bundles: [
        {
            name: "bundleName",
            assets: {
                "boy": "./boy.png",
                "hat": "./hat.png",
                "panel1": "./ui/MiniPanel01.jpg",
            }
        },
        {
            name: "animationBundle", //únicamente frames de animación aca
            assets: {
                "boyWalk1": "./boy/walk1.png",
                "boyWalk2": "./boy/walk2.png",
                "boyWalk3": "./boy/walk3.png",
                "boyWalk4": "./boy/walk4.png",
                "boyWalk5": "./boy/walk5.png",
                "boyWalk6": "./boy/walk6.png",

            }
        },
    ]
};
