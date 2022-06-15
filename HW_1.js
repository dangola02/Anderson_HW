const prompt = require('prompt-sync')();

let firstNumber = +prompt("Enter your first number ");

let secondNumber = +prompt("Enter your second number ");


if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

    console.log(firstNumber.toString(secondNumber)); // Первое Задание 
    console.log(firstNumber + secondNumber, firstNumber / secondNumber) // Второе Задание 

} else {
    console.log("Некорректный ввод!!!");
}
