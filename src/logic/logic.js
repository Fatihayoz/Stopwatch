import { data } from "../data/data.js";

const stopwatch = () => {
  data.msec += 10;
  document.getElementById("milliseconds").innerText = data.msec;
  if (data.msec === 1000) {
    data.sec++;
    data.msec = 0;
    if (data.sec < 10) {
      document.getElementById("seconds").innerText = "0" + data.sec;
    } else {
      document.getElementById("seconds").innerText = data.sec;
    };
    if (data.sec >= 59) {
      data.min++;
      data.sec = 0;
      if (data.min < 10) {
        document.getElementById("minutes").innerText = "0" + data.min;
      } else {
        document.getElementById("minutes").innerText = data.min;
      };
      if (min >= 59) {
        data.hr++;
        data.min = 0;
        document.getElementById("hours").innerText = "0" + data.hr;
      } else {
        document.getElementById("hours").innerText = data.hr;
      }
    }
  }
};

export { stopwatch };
