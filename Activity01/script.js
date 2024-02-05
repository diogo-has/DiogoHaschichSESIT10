function soma() {
    var num1 = document.getElementById("numS1").valueAsNumber;
    var num2 = document.getElementById("numS2").valueAsNumber;

    var result = num1 + num2;
    document.getElementById("resultadoS").textContent = result;
    console.log(result);
}

function menos() {
    var num1 = document.getElementById("numM1").valueAsNumber;
    var num2 = document.getElementById("numM2").valueAsNumber;

    var result = num1 - num2;
    document.getElementById("resultadoM").textContent = result;
    console.log(result);
}

function vezes() {
    var num1 = document.getElementById("numV1").valueAsNumber;
    var num2 = document.getElementById("numV2").valueAsNumber;

    var result = num1 * num2;
    document.getElementById("resultadoV").textContent = result;
    console.log(result);
}

function divisao() {
    var num1 = document.getElementById("numD1").valueAsNumber;
    var num2 = document.getElementById("numD2").valueAsNumber;

    var result = num1 / num2;
    document.getElementById("resultadoD").textContent = result;
    console.log(result);
}

function media() {
    var num1 = document.getElementById("numME1").valueAsNumber;
    var num2 = document.getElementById("numME2").valueAsNumber;
    var num3 = document.getElementById("numME3").valueAsNumber;

    var result = (num1 + num2 + num3) / 3;
    document.getElementById("resultadoME").textContent = result;
    console.log(result);
}