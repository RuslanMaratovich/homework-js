//для ввода с клавиатуры
//в консоль ввести: npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);
