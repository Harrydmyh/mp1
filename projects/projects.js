let numOne = document.getElementById("num1");
let numTwo = document.getElementById("num2");
let output = document.getElementById("result")

function checkInput(num1, num2) {
    if (num1 === "" || num2 === "") {
        output.style.color = "red"
        output.innerHTML = ("Please enter both numbers!");
        return null
    }
    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        output.style.color = "red"
        output.innerHTML = ("Inputs must be valid numbers!");
        return null;
    }
    return [num1, num2];
}

function doAdd() {
    if (checkInput(numOne.value, numTwo.value)) {
        let answer = Number(numOne.value) + Number(numTwo.value)
        if (answer < 0) {
            output.style.color = "red"
        } else {
            output.style.color = "saddlebrown"
        }
        output.innerHTML = String(answer);
    }
}

function doSubtract() {
    if (checkInput(numOne.value, numTwo.value)) {
        let answer = Number(numOne.value) - Number(numTwo.value)
        if (answer < 0) {
            output.style.color = "red"
        } else {
            output.style.color = "saddlebrown"
        }
        output.innerHTML = String(answer);
    }
}

function doMultiply() {
    if (checkInput(numOne.value, numTwo.value)) {
        let answer = Number(numOne.value) * Number(numTwo.value)
        if (answer < 0) {
            output.style.color = "red"
        } else {
            output.style.color = "saddlebrown"
        }
        output.innerHTML = String(answer);
    }
}

function doDivide() {
    if (checkInput(numOne.value, numTwo.value)) {
        if (Number(numTwo.value) === 0) {
            output.innerHTML = ("Divisor must be a non-zero value!");
        } else {
            let answer = Number(numOne.value) / Number(numTwo.value)
            if (answer < 0) {
                output.style.color = "red"
            } else {
                output.style.color = "saddlebrown"
            }
            output.innerHTML = String(answer);
        }
    }
}

function doExponential() {
    if (checkInput(numOne.value, numTwo.value)) {
        let num1 = Number(numOne.value)
        let num2 = Number(numTwo.value)
        if (! Number.isInteger(num2) || (num1 === 0 && num2 < 0)) {
            output.innerHTML = ("Exponential numbers must be positive integers!");
        } else if (num2 >= 0){
            let result = 1
            for (let i = 1; i <= num2; i++) {
                result *= num1
            }
            if (result < 0) {
                output.style.color = "red"
            } else {
                output.style.color = "saddlebrown"
            }
            output.innerHTML = String(result);
        } else {
            let result = 1
            for (let i = 1; i <= -(num2); i++) {
                result *= num1
            }
            result = 1/result
            if (result < 0) {
                output.style.color = "red"
            } else {
                output.style.color = "saddlebrown"
            }
            output.innerHTML = String(result);
        }
    }
}

function doRemove() {
    numOne.value = "";
    numTwo.value = "";
    output.innerHTML = ("");
}