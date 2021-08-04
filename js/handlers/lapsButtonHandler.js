import { data } from "../data/data.js";

const lapsButtonHandler = () => {
  const ul = document.getElementById("laps-list");
  const li = document.createElement("li");
  ul.appendChild(li);
  data.lapCounter++;
  li.innerText = `${data.lapCounter}) ${data.hr} : ${data.min} : ${data.sec}: ${data.msec}`;
}

export { lapsButtonHandler };
