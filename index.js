// HEADER
// create header
const header = document.createElement("header");
document.body.appendChild(header);

// create a-link
const aHeader = document.createElement("a");
aHeader.href = "https://stopwatch.net/";
header.appendChild(aHeader);

// create img // THINK ABOUT A GENERAL IMG (img is used twice-header and logo)
const imgHeader = document.createElement("img");
imgHeader.src = "/assets/logo.png";
imgHeader.alt = "Stopwatch.NET";
aHeader.appendChild(imgHeader);

// FOOTER
// create footer
const footer = document.createElement("footer");
document.body.appendChild(footer);

// create div container
const footerDivContainer = document.createElement("div");
footerDivContainer.className = "container";
footer.appendChild(footerDivContainer);

// create footer logo
const footerLogo = document.createElement("div");
footerLogo.className = "footer-logo";
footerDivContainer.appendChild(footerLogo);

// create footer logo img
const imgFooterLogo = document.createElement("img");
imgFooterLogo.src = "/assets/logo.png";
footerLogo.appendChild(imgFooterLogo);

// create footer items
const footerItems = document.createElement("div");
footerItems.className = "footer-items";
footerDivContainer.appendChild(footerItems);

// create a for contact
const aContact = document.createElement("a");
aContact.href = "https://www.google.com";
aContact.target = "_blank";
aContact.innerText = "Contact Us";
footerItems.appendChild(aContact);

// create a for privacy policy
const aPr = document.createElement("a");
aPr.href = "https://www.twitter.com";
aPr.innerText = "Privacy Policy";
footerItems.appendChild(aPr);
