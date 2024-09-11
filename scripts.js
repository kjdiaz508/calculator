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

let has_op = false;
let can_eval = false

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

function parseExpression() {
    let [left, op, right] = display.textContent.split(" ")
    return [parseFloat(left), op, parseFloat(right)]
}

function evalScreen() {
    let [left, op, right] = parseExpression()
    result = operate(left, right, op);
    display.textContent = result;
    has_op = false
    can_eval = false
}

function numberButtonClick(event) {
    text = display.textContent;
    display.textContent = display.textContent + event.target.textContent;
    if (has_op) {
        can_eval = true;
    }
}

function opButtonClick(event) {
    if (has_op) {
        if (can_eval){
            evalScreen()
        }
    }
    has_op = true;
    op = event.target.textContent;
    text = display.textContent;
    display.textContent = text + " " + op + " ";
}

function eqButtonClick(event) {
    evalScreen()
}





