import { data } from "../data/data.js";

const resetButtonHandler = () => {
  clearInterval(data.interval)
  data.msec = 0;
  data.sec = 0;
  data.min = 0;
  data.hr = 0;
  data.interval = null;
  data.lapCounter = 0;
  data.switcher = "Start";
  document.getElementById("laps-list").innerHTML = "";
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("milliseconds").innerText = "000";
}

export { resetButtonHandler };
