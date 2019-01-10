import {ArcRotateCamera, Color4, Engine, Scene, Vector3} from "babylonjs";

export default class GameManager {
  private canvas!: HTMLCanvasElement | WebGLRenderingContext;
  private engine!: Engine;
  private scene!: Scene;
  private mainCamera!: ArcRotateCamera;
  public constructor() {
    this.init();
  }
  public runEngine() {
    this.renderScene();
  }
  private init() {
    console.log("Initalizing engine components");
    this.canvas = document.getElementById("renderCanvas") as HTMLCanvasElement | WebGLRenderingContext;
    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(1, 1, 1, 1);
    this.mainCamera = new ArcRotateCamera("mainCamera", 0, 90, 100, new Vector3(0, 0, 0), this.scene);
  }
  private renderScene() {
   this.engine.runRenderLoop(() => {
     this.scene.render();
   });
  }
}
