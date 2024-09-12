const display = document.querySelector("#screen");
const calculator = document.querySelector(".container");
calculator.addEventListener("click", (e) => {
    const btnType = e.target.getAttribute("class");
    if (btnType === "clear button"){
        clearButtonClick(e);
    }
    if (require_clear) {
        return;
    }
    if (btnType === "number button") {
        numberButtonClick(e);
    } else if (btnType === "op button") {
        opButtonClick(e);
    } else if (btnType === "eq button") {
        eqButtonClick(e);
    }
});

const operations = {
    "+": add,
    "-": subtract,
    "/": divide,
    "x": multiply,
}

let has_op = false;
let can_eval = false;
let require_clear = false;

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

function displayError(text) {
    display.textContent = text;
    require_clear = true;
}

function evalScreen() {
    let [left, op, right] = parseExpression()
    if (right === 0 && op === "/"){
        displayError("can't divide by 0!")
        return;
    }
    let result = operate(left, right, op);
    let temp = String(result);
    let len = temp.length;

    if (len > 13 && temp.includes(".")){
        let numDecimals = 13 - temp.indexOf(".") + 1
        result = result.toFixed(numDecimals)
    }
    
    display.textContent = result;
    has_op = false;
    can_eval = false;
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
            evalScreen();
        }
    }
    has_op = true;
    op = event.target.textContent;
    text = display.textContent;
    display.textContent = text + " " + op + " ";
}

function clearScreen() {
    display.textContent = "";
    has_op = false;
    can_eval = false;
    require_clear = false;
}

/* wrappers for consistency and because they may be useful later */
function eqButtonClick(event) {
    evalScreen();
}

function clearButtonClick(event){
    clearScreen();
}





