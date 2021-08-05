import { data } from "../data/data.js";
import { stopwatch } from "../logic/logic.js";

const startButtonHandler = () => {
  if (data.switcher === "Pause") {
    data.interval = setInterval(stopwatch, 10);
    document.getElementById("btn-toggle").innerText = "Pause";
    data.switcher = "Start";
  } else {
    document.getElementById("btn-toggle").innerText = "Start";
    clearInterval(data.interval);
    data.switcher = "Pause";
  }
}

export { startButtonHandler };
