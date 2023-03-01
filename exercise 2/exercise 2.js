let firstNumber = "685484845113185496879874";
let secondNumber = "68486421654575484";

console.log(sum(firstNumber, secondNumber));
console.log(subtraction(firstNumber, secondNumber));
console.log(multiplication(firstNumber, secondNumber));
console.log(division(firstNumber, secondNumber));

function sum(a, b) {
    let prefix = '0'.repeat(Math.abs(a.length - b.length));

    if (prefix.length) {
        if (a.length > b.length) {
            b = `${prefix}${b}`;
        } else if (b.length > a.length) {
            a = `${prefix}${a}`;
        }
    }

    let arrC = [];
    let e = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        arrC[i] = parseInt(a[i]) + parseInt(b[i]);
    }

    for (let i = arrC.length - 1; i > 0; i--) {
        if (arrC[i] >= 10) {
            e = Math.floor(arrC[i] / 10);
            arrC[i] = arrC[i] - (e*10);
            arrC[i - 1] = arrC[i - 1] + e;
        }
    }
    return arrC.join("");
}


function subtraction(a, b) {
    let prefix = '0'.repeat(Math.abs(a.length - b.length));
    let flip = false;

    if (prefix.length) {
        if (a.length > b.length) {
            b = `${prefix}${b}`;
        } else if (b.length > a.length) {
            a = `${prefix}${a}`;
            a = [b, b = a][0];
            flip = true;
        }
    }

    let r_buffer = [];

    for (let i = a.length - 1; i >= 0; i--) {
        r_buffer[i] = parseInt(a[i]) - parseInt(b[i]);
    }

    for (let i = r_buffer.length - 1; i > 0; i--) {
        if (0 > r_buffer[i]) {
            r_buffer[i] = 10 + r_buffer[i];
            r_buffer[i - 1] = r_buffer[i - 1] - 1;
        }
    }

    while (r_buffer[0] === 0) {
        r_buffer.shift();
    }
    let c = r_buffer.length ? r_buffer.join('') : '0';
    return flip ? `-${c}` : c;
}


function multiplication(a, b) {
    let arrA = a.split('').reverse();
    let arrB = b.split('').reverse();
    let arrC = [];

    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            let m = arrA[i] * arrB[j];
            arrC[i + j] = (arrC[i + j]) ? arrC[i + j] + m : m;
        }
    }

    for (let i = 0; i < arrC.length; i++) {
        let num = arrC[i] % 10;
        let move = Math.floor(arrC[i] / 10);
        arrC[i] = num;
        if (arrC[i + 1])
            arrC[i + 1] += move;
        else if (move != 0)
            arrC[i + 1] = move;
    }
    return arrC.reverse().join('');
}



function division(a, b) {
    let bigFirstNumber = BigInt(a);
    let bigSecondNumber = BigInt(b);
    return (String(bigFirstNumber / bigSecondNumber));
}