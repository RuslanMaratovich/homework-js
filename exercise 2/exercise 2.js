let firstNumber = "1234567890123456789012345678901234567890";
let secondNumber = "1234567890123456789012345678901234567890";

console.log(sum(firstNumber, secondNumber));
console.log(multiplication(firstNumber, secondNumber));
console.log(subtraction(firstNumber, secondNumber));
console.log(division(firstNumber, secondNumber));

function sum(a, b) {
    let bigFirstNumber = BigInt(a);
    let bigSecondNumber = BigInt(b);
    return (String(bigFirstNumber + bigSecondNumber));
}

function multiplication(a, b) {
    let bigFirstNumber = BigInt(a);
    let bigSecondNumber = BigInt(b);
    return (String(bigFirstNumber * bigSecondNumber));
}

function subtraction(a, b) {
    let bigFirstNumber = BigInt(a);
    let bigSecondNumber = BigInt(b);
    return (String(bigFirstNumber - bigSecondNumber));
}

function division(a, b) {
    let bigFirstNumber = BigInt(a);
    let bigSecondNumber = BigInt(b);
    return (String(bigFirstNumber / bigSecondNumber));
}