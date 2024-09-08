const display = document.querySelector("#screen");
const calculator = document.querySelector(".container");
calculator.addEventListener("click", (e) => {
    const btnType = e.target.getAttribute("class");
    if (btnType === "number button") {
        numberButtonClick(e);
    } else if (btnType === "op button") {
        opButtonClick(e)
    } else if (btnType === "eq button") {
        eqButtonClick(e)
    }
});

const operations = {
    "+": add,
    "-": subtract,
    "/": divide,
    "x": multiply,
}

let 

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    return operations[op](a, b);
}

function numberButtonClick(event) {
    text = display.textContent;
    display.textContent = display.textContent + event.target.textContent;
}

function opButtonClick(event) {
    op = event.target.textContent;
    text = display.textContent;
    display.textContent = text + " " + op + " ";
}

function eqButtonClick(event) {
    let [left, op, right] = display.textContent.split(" ");
    console.log(display.textContent);
    result = operate(parseInt(left), parseInt(right), op);
    display.textContent = result;
}





