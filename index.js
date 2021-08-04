import "./js/listeners/startButton.js";






















// // HEADER
// // create header
// const header = document.createElement("header");
// document.body.appendChild(header);

// // create a-link
// const aHeader = document.createElement("a");
// aHeader.href = "https://stopwatch.net/";
// header.appendChild(aHeader);

// // create img // THINK ABOUT A GENERAL IMG (img is used twice-header and logo)
// const imgHeader = document.createElement("img");
// imgHeader.src = "/assets/logo.png";
// imgHeader.alt = "Stopwatch.NET";
// aHeader.appendChild(imgHeader);

// // MAIN
// // create div container
// const container = document.createElement("div");
// container.className = "container";
// document.body.appendChild(container);

// // create row container
// const row = document.createElement("div");
// row.className = "row";
// container.appendChild(row);

// // create columns container
// const sm1 = document.createElement("div");
// sm1.className = "col-sm-1";
// row.appendChild(sm1);

// const sm10 = document.createElement("div");
// sm10.className = "col-sm-10";
// row.appendChild(sm10);

// // create sub-containers
// const mainCont = document.createElement("div");
// mainCont.className = "main-cont";
// sm10.appendChild(mainCont);

// // create tab menu
// const tab = document.createElement("div");
// tab.className = "tab-menu";
// mainCont.appendChild(tab);

// // create item links
// const stopwatchItem = document.createElement("div");
// stopwatchItem.className = "item active-item";
// tab.appendChild(stopwatchItem);
// const aItem1 = document.createElement("a");
// aItem1.href = "index.html";
// aItem1.innerText = "Stopwatch";
// stopwatchItem.appendChild(aItem1);

// const timerItem = document.createElement("div");
// timerItem.className = "item";
// tab.appendChild(timerItem);
// const aItem2 = document.createElement("a");
// aItem2.href = "timer.html";
// aItem2.innerText = "Timer";
// timerItem.appendChild(aItem2);

// // create stopw-cont menu
// const stopw = document.createElement("div");
// stopw.className = "stopw-cont";
// mainCont.appendChild(stopw);

// // create time units
// // hours
// const hours = document.createElement("div");
// hours.className = "unit";
// stopw.appendChild(hours);
// const titleHours = document.createElement("h2");
// titleHours.className = "time-digit";
// titleHours.id = "hours";
// titleHours.innerText = "00";
// hours.appendChild(titleHours);
// const labelHours = document.createElement("label");
// labelHours.innerText = "HRS";
// hours.appendChild(labelHours);

// // minutes
// const minutes = document.createElement("div");
// minutes.className = "unit";
// stopw.appendChild(minutes);
// const titleMinutes = document.createElement("h2");
// titleMinutes.className = "time-digit";
// titleMinutes.id = "minutes";
// titleMinutes.innerText = "00";
// minutes.appendChild(titleMinutes);
// const labelMinutes = document.createElement("label");
// labelMinutes.innerText = "MIN";
// minutes.appendChild(labelMinutes);

// // seconds
// const seconds = document.createElement("div");
// seconds.className = "unit";
// stopw.appendChild(seconds);
// const titleSeconds = document.createElement("h2");
// titleSeconds.className = "time-digit";
// titleSeconds.id = "seconds";
// titleSeconds.innerText = "00";
// seconds.appendChild(titleSeconds);
// const labelSeconds = document.createElement("label");
// labelSeconds.innerText = "SEC";
// seconds.appendChild(labelSeconds);

// // milliseconds
// const milliseconds = document.createElement("div");
// milliseconds.className = "unit";
// stopw.appendChild(milliseconds);
// const titleMilliseconds = document.createElement("h2");
// titleMilliseconds.className = "time-digit";
// titleMilliseconds.id = "milliseconds";
// titleMilliseconds.innerText = "000";
// milliseconds.appendChild(titleMilliseconds);
// const labelMilliseconds = document.createElement("label");
// labelMilliseconds.innerText = "MS";
// milliseconds.appendChild(labelMilliseconds);

// // buttons
// const buttonWrapper = document.createElement("div");
// buttonWrapper.className = "btn-wrap";
// stopw.appendChild(buttonWrapper);

// // start button
// const startButton = document.createElement("button");
// startButton.className = "btn";
// startButton.id = "btn-toggle";
// startButton.innerText = "Start";
// buttonWrapper.appendChild(startButton);

// // lap button
// const lapButton = document.createElement("button");
// lapButton.className = "btn";
// lapButton.id = "btn-add-lap";
// lapButton.innerText = "Add Lap";
// buttonWrapper.appendChild(lapButton);

// // reset button
// const resetButton = document.createElement("button");
// resetButton.className = "btn";
// resetButton.id = "btn-reset";
// resetButton.innerText = "Reset";
// buttonWrapper.appendChild(resetButton);

// // create laps menu
// const laps = document.createElement("div");
// laps.className = "laps";
// mainCont.appendChild(laps);

// // create laps header
// const lapsHeader = document.createElement("label");
// lapsHeader.id = "laps-header";
// lapsHeader.innerText = "LAPS";
// laps.appendChild(lapsHeader);

// // create ul
// const ul = document.createElement("ul");
// ul.id = "laps-list";
// laps.appendChild(ul);

// // create lap info
// const lapInfo = document.createElement("label");
// lapInfo.id = "lap-info";
// laps.appendChild(lapInfo);
// const em = document.createElement("em");
// em.innerText = `To add a lap, press the "Add Lap" button.`;
// lapInfo.appendChild(em);

// // FOOTER
// // create footer
// const footer = document.createElement("footer");
// document.body.appendChild(footer);

// // create div container
// const footerDivContainer = document.createElement("div");
// footerDivContainer.className = "container";
// footer.appendChild(footerDivContainer);

// // create footer logo
// const footerLogo = document.createElement("div");
// footerLogo.className = "footer-logo";
// footerDivContainer.appendChild(footerLogo);

// // create footer logo img
// const imgFooterLogo = document.createElement("img");
// imgFooterLogo.src = "/assets/logo.png";
// footerLogo.appendChild(imgFooterLogo);

// // create footer items
// const footerItems = document.createElement("div");
// footerItems.className = "footer-items";
// footerDivContainer.appendChild(footerItems);

// // create a for contact
// const aContact = document.createElement("a");
// aContact.href = "https://www.google.com";
// aContact.target = "_blank";
// aContact.innerText = "Contact Us";
// footerItems.appendChild(aContact);

// // create a for privacy policy
// const aPr = document.createElement("a");
// aPr.href = "https://www.twitter.com";
// aPr.innerText = "Privacy Policy";
// footerItems.appendChild(aPr);

// // data

// // const data = {
// //   msec: 0,
// //   sec: 0,
// //   min: 0,
// //   hr: 0,
// //   interval: 0
// // }

// let msec = 0;
// let sec = 0;
// let min = 0;
// let hr = 0;
// let interval = null;
// let switcher = "Pause";
// let lap = [];
// let lapCounter = 0;

// // stopwatch function
// const stopwatch = () => {
//   msec += 10;
//   titleMilliseconds.innerHTML = msec;
//   if (msec === 1000) {
//     sec++;
//     msec = 0;
//     if (sec < 10) {
//       titleSeconds.innerText = "0" + sec;
//     } else {
//       titleSeconds.innerText = sec;
//     };
//     if (sec >= 59) {
//       min++;
//       sec = 0;
//       if (min < 10) {
//         titleMinutes.innerText = "0" + min;
//       } else {
//         titleMinutes.innerText = min;
//       };
//       if (min >= 59) {
//         hr++;
//         min = 0;
//         titleHours.innerText = hr;
//       }
//     }
//   }
// };

// // start button handler
// const startButtonHandler = () => {
//   if (switcher === "Pause") {
//     interval = setInterval(stopwatch, 10);
//     startButton.innerText = "Pause";
//     switcher = "Start";
//   } else {
//     startButton.innerText = "Start";
//     clearInterval(interval);
//     switcher = "Pause";
//   }
// }

// // add event listener to start button
// startButton.addEventListener("click", startButtonHandler);

// // lap button handler
// const lapButtonHandler = () => {
//   const ul = document.createElement("ul");
//   ul.id = "laps-list";
//   laps.appendChild(ul);
//   const li = document.createElement("li");
//   lapCounter++;
//   li.innerText = `${lapCounter}) ${hr} : ${min} : ${sec}: ${msec}`;
//   ul.appendChild(li);
// }

// // add event listener to lap button
// lapButton.addEventListener("click", lapButtonHandler);

// // reset button handler
// const resetButtonHandler = () => {
//   window.location.reload();
// };

// // add event listener to reset button
// resetButton.addEventListener("click", resetButtonHandler);




/*
let msecs = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let onOff = "Start";
let interval;

const display = () => {
  startButton.innerText = "Stop";
  msecs += 10;
  titleMilliseconds.innerText = msecs;
  if (msecs === 1000) {
    secs++;
    msecs = 0;    
    if (secs < 10) {
      titleSeconds.innerText = "0" + secs;
    } else {
      titleSeconds.innerText = secs;
    };    
    if (secs >= 59) {
      mins++;
      secs = 0;      
      if (mins < 10) {
        titleMinutes.innerText = "0" + mins;
      } else {
        titleMinutes.innerText = mins;
      };      
      if (mins >= 59) {
        hrs++;
        mins = 0;        
        titleHours.innerText = hrs;
      }
    };  
  }

  if (onOff = "Stop") {
    startButton.addEventListener("click", () => {
      clearInterval(interval);
      startButton.innerText = "Start";
    });
  } else {
    startButton.addEventListener("click", () => {
      display();
      startButton.innerText = "Stop";
    });

  }
}

let startTime;
let elapsedTime = 0;
const startButtonHandler = () => {
  startTime = Date.now() - elapsedTime;
  clearInterval(interval);
  interval = setInterval(display, 10);
}; 

startButton.addEventListener("click", startButtonHandler);
*/
