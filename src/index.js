import nav from "./nav";
import Button from "./button";
import { makeColor } from "./button-styles";
import makeImage from "./image";
// import foo from "./foo.ts";
import "./footer.css";
// import "./button.css"; //replace with dynamic export
import logo from "./logo.jpg";

// import { footer } from "./footer";
const loadFooter = () => import ("./footer");
const getColorStyle = (color) => import(`./button-style/${color}`);
// console.log(nav(), top, bottom, button("my first button"), makeColor("gray"));
console.log(logo);
function greeting(name){
    console.log(`Hi ${name} ${nav()}`);
    // console.log(`${button('Button Label')}`);
    console.log();
    var button = Button('Click me!!!');
    button.style = makeColor('green');
    document.body.appendChild(button);
    button.addEventListener('click', (e)=> {
        loadFooter().then((m)=>{
            document.body.appendChild(m.footer);
        });
        getColorStyle("red").then((m) => {
            debugger;
            button.style = m.default;
        });
    });
    
    document.body.appendChild(makeImage(logo));
}
greeting("sameer");

