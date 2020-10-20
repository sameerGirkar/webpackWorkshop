const {red, blue} = require("./button-styles");

const top = document.createElement("div");
const bottom = document.createElement("div");
const footer = document.createElement("footer");

top.innerText = "footer Top";
top.style = blue;

bottom.innerText = "footer Bottom"
bottom.style = red;

footer.appendChild(top);
footer.appendChild(bottom);


export { top, bottom, footer };
