let input = document.getElementById("input");

let btnC = document.getElementById("btnC");
btnC.addEventListener("click", () => {
    input.value = "";
})

let btnOpenB = document.getElementById("btnOpenB");
btnOpenB.addEventListener("click", () => {
    input.value += "(";
})

let btnCloseB = document.getElementById("btnCloseB");
btnCloseB.addEventListener("click", () => {
    input.value += ")";
})

let btnDivide = document.getElementById("btnDivide");
btnDivide.addEventListener("click", () => {
    input.value += "/";
})

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    input.value += 7;
})

let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => {
    input.value += 8;
})

let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", () => {
    input.value += 9;
})

let btnMultiply = document.getElementById("btnMultiply");
btnMultiply.addEventListener("click", () => {
    input.value += "*";
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    input.value += 4;
})

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    input.value += 5;
})

let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    input.value += 6;
})

let btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", () => {
    input.value += "-";
})

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    input.value += 1;
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    input.value += 2;
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    input.value += 3;
})

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
    input.value += "+";
})

let btnZero = document.getElementById("btnZero");
btnZero.addEventListener("click", () => {
    input.value += 0;
})

let btnDot = document.getElementById("btnDot");
btnDot.addEventListener("click", () => {
    input.value += ".";
})

let btnEqual = document.getElementById("btnEqual");
btnEqual.addEventListener("click", () => {
    input.value = eval(input.value);
})