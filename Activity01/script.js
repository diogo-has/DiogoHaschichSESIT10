function soma() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;

    var result = num1 + num2;
    document.getElementById("resultado").textContent = result;
    console.log(result);
}

function menos() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;

    var result = num1 - num2;
    document.getElementById("resultado").textContent = result;
    console.log(result);
}

function vezes() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;

    var result = num1 * num2;
    document.getElementById("resultado").textContent = result;
    console.log(result);
}

function divisao() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;

    var result = num1 / num2;
    document.getElementById("resultado").textContent = result;
    console.log(result);
}