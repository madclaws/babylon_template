import gameManager from "./gameManager";
window.addEventListener("load", () => {
  const gameMgrInstance: gameManager = new gameManager();
  gameMgrInstance.runEngine();
});
