
function FirstScript() {

    let firstNumber = +prompt("Enter your first number ");

    let secondNumber = +prompt("Enter your second number ");

    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

        alert(firstNumber.toString(secondNumber));

    } else {
        alert("Некорректный ввод!!!");

    }
}

function SecondScript() {

    let thirdNumber = +prompt("Enter your first number ");

    if (Number.isInteger(thirdNumber)) {

        let fourthNumber = +prompt("Enter your second number ");

        if (Number.isInteger(fourthNumber)) {

            alert(thirdNumber + fourthNumber + ' ' + "and" + ' ' + thirdNumber / fourthNumber);

        } else {
            alert("Некорректный ввод!!!");

        }
    } else {
        alert("Некорректный ввод!!!");
    }
}
