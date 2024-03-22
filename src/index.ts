import { Application, Assets, Ticker} from 'pixi.js'
import { manifest } from './manifest';
import { Keyboard } from './utils/Keyboard';

import { MemoriesDvd } from './scenes/MemoriesDvd';

export const WIDTH = 1920;
export const HEIGHT = 1080;


const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WIDTH,
	height: HEIGHT
});

Keyboard.initialize();

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

async function init() {
    // Assets.init debe llamarse solo una vez. Agrupar todos los bundles en un manifest
    await Assets.init({ manifest: manifest });

    // Carga los bundles que necesites
    await Assets.loadBundle("bundleName");

}

init();

const escena1: MemoriesDvd = new MemoriesDvd();
	Ticker.shared.add(function (deltaFrame){
	escena1.update(Ticker.shared.deltaMS,deltaFrame);
})

app.stage.addChild(escena1);