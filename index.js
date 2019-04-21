let number = "";
let secondNumber = "";
let operator = "";

const whenNumberPressed = num => {
    number += num;
    document.querySelector("#display").innerHTML = number; 
}; 

const whenOperandPressed = type => {
    secondNumber = number;
    number = "";
    operator = type;
};

const whenEqual = () => {
    const result = document.querySelector("#display")
    document.querySelector("#operator").innerHTML = ""

    let total = 0

    const firstNumber = parseInt(number);
    const secNumber = parseInt(secondNumber)

    switch (operator) {
        case "multiplication":
            total = firstNumber * secNumber;
            break; 
        case "division":
            total = secNumber / firstNumber;
            break; 
        case "addition":
            total = firstNumber + secNumber;
            break; 
        case "subtract":
            total = secNumber - firstNumber; 
            break;
        default:
    }
    
    result.innerHTML = total; 
};


const allClear = () => {
    document.querySelector("#display").innerHTML = "0"
    operator = "";
    number = "";
    secondNumber = "";
}