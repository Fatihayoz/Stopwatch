// create header
const header = document.createElement("header");
document.body.appendChild(header);

// create a-link
const aHeader = document.createElement("a");
aHeader.href = "https://stopwatch.net/";
header.appendChild(aHeader);

// create img
const imgHeader = document.createElement("img");
imgHeader.src = "/assets/logo.png";
imgHeader.alt = "Stopwatch.NET";
aHeader.appendChild(imgHeader);
