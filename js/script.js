function getElement(elementId){
    return document.getElementById(elementId);
}

var result;

// Number Values
const txtResult = getElement("txtResult"); //Display the output of our operation
const txtNum1 = getElement("txtNum1"); //This is our first value
const txtNum2 = getElement("txtNum2"); //Second value

// OPerator values

const btnSum = getElement("btnSum");
const btnMinus = getElement("btnMinus");
const btnMultiply = getElement("btnMultiply");
const btnDivide = getElement("btnDivide");
const btnModulo = getElement("btnModulo");
const btnEqual = getElement("btnEqual");
const btnClear = getElement("btnClear");

// Bind to event listener
btnSum.addEventListener("click", calculate);
btnMinus.addEventListener("click", calculate);
btnDivide.addEventListener("click", calculate);
btnModulo.addEventListener("click", calculate);
btnMultiply.addEventListener("click", calculate);
btnClear.addEventListener("click", calculate);
btnEqual.addEventListener("click", result);


// Operators
function sum(num1, num2) {
    return num1 + num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 ==0){
        return "Cannot divide a number by zero";
    }else{
        return num1 / num2;
    }
}
function modulo(num1, num2) {
    if(num2 == 0){
        return "Cannot modulo a number by zero";
    }else{
        return num1 % num2;
    }
}

// Creating a function
function calculate() {
    let num1 = parseInt(getElement("txtNum1").value);
    let num2 = parseInt(getElement("txtNum2").value);

    let sign = event.target.value;

    if(sign == "+")
    {result = sum(num1, num2)}
    else if (sign == "-")
    {result = minus(num1, num2)}
    else if(sign == "*")
    {result = multiply(num1, num2)}
    else if (sign == "/")
    {result = divide(num1, num2)}
    else if (sign == "%")
    {result = modulo(num1, num2)}
    else if (sign == "CE")
    {getElement("txtResult").value = 0, getElement("txtNum1").value = 0, getElement("txtNum2").value = 0}
}
function result() {
    getElement("txtResult").value = result;
}

