import { Application} from 'pixi.js'
import { Scene } from './Scene';

const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
/*
export const manifest:AssetsManifest  = {
    bundles: [
        {
            name : "bundle-1",
            assets:
            {
                "Clampy" : "./clampy.png",
                "Hat" : "./hat.png",
            }
        },
    ]
}
*/
window.addEventListener("resize", ()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX,scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal +"px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));
/*
async function init() {
    // Assets.init must only happen once! 
    // Pack all your bundles into one manifest!
    await Assets.init({ manifest: manifest });

    // Load the bundles you need
    await Assets.loadBundle("bundle-1");
}


init();
*/

const escena1: Scene = new Scene();

app.stage.addChild(escena1);