// This is commonJs export 
/**
 * @param {string} buttonName
 * @returns {Element} 
 */
const makeButton = (buttonName) => {
    const btn = document.createElement("button");
    btn.innerText = `Button: ${buttonName}`;
    return btn;
};
module.exports = makeButton;