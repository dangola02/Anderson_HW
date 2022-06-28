// ///////////TASK 1

const concatStrings = function (arg, separator) {

    let newStr = arg;

    let newSep = "";

    if (typeof (separator) === typeof ("hello")) {

        newSep = separator;
    }

    if (typeof (arg) !== typeof ("hello")) {

        return "";
    }

    const concat = function (arg2, separator2) {

        if (typeof (arg2) === typeof ("hello")) {
            newStr = `${newStr}${newSep}${arg2}`;
        } else {
            return newStr;
        }

        if (typeof (separator2) === typeof ("hello")) {
            newSep = separator2;
        }

        return concat;

    }

    return concat;
}


/////TASK 2

class Calculator {

    static checkNum(num) {

        if (typeof (num) !== typeof (6) || num === undefined || num === Infinity || num === -Infinity || isNaN(num) === true) {
            throw new Error("Number is not Valid or Empty")
        }
    }

    constructor(a, b) {

        Calculator.checkNum(a);
        Calculator.checkNum(b);

        this.a = a;
        this.b = b;

    }


    setX(num) {
        Calculator.checkNum(num);

        this.a = num;

        return this;

    }

    setY(num) {
        Calculator.checkNum(num);

        this.b = num;

        return this;

    }

    logSum = () => {
        console.log(this.a + this.b);

        return this;

    }

    logMul = () => {
        console.log(this.a * this.b);

        return this;
    }

    logSub = () => {
        console.log(this.a - this.b);

    }

    logDiv = () => {
        if (this.b === 0) {
            throw new Error("Can't divide by 0")

        }
        console.log(this.a / this.b);

        return this;
    }

}

const calculator = new Calculator(0, 5);

calculator.logDiv();
