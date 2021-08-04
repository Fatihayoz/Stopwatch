import { startButtonHandler } from "../handlers/startButtonHandler.js";

const startButton = document.getElementById("btn-toggle");
startButton.addEventListener("click", startButtonHandler);