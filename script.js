var result;
const screenInput = document.getElementById('input');
var screenValue = "";
var lastChar = "";
const btn = document.querySelector(".button");

function showDisplay(char) {
    if (screenInput.textContent === '0') {screenInput.value = ""};
    screenInput.value += char;
    lastChar = char;
    screenValue += char;
    console.log(screenValue)
}

function clearDisplay() {
    screenInput.value = "0";
    screenValue = "";
}

function backspace() {
    screenValue = screenValue.substring(0, screenValue.length -1)
    if (screenInput.value !== "0") {screenInput.value = screenValue}
}

function operate (operator, num1,num2) {
    switch (operator) 
    {
        case "%": 
            result = num1 % num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/": 
            result = num1 / num2;
            break;
    }
    return result;
}
