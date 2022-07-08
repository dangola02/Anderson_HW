const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const changeSign = document.querySelector('[data-change]')
//final version
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    changeSign() {
        if (this.currentOperand > 0) {
            this.currentOperand = -this.currentOperand;
        } else if (this.currentOperand < 0) {
            this.currentOperand = this.currentOperand * -1;
        }

    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = makePlus(computation);
                function makePlus(computation) {
                    let val;
                    if (prev % 1 === 0 && current % 1 === 0) {
                        computation = (prev + current);
                        return computation;
                    }
                    computation = (prev + current);
                    val = computation.toString().slice(0, 10)
                    return parseFloat(val);
                }
                break
            case '-':
                computation = (makeMinus(computation));
                function makeMinus(computation) {
                    if (prev % 1 === 0 && current % 1 === 0) {
                        computation = (prev - current);
                        return computation;
                    }
                    let val;
                    computation = (prev - current);
                    val = computation.toString().slice(0, 10)
                    return parseFloat(val);
                }
                break
            case '*':
                computation = (makeMulty(computation));
                function makeMulty(computation) {
                    if (prev % 1 === 0 && current % 1 === 0) {
                        computation = (prev * current);
                        return computation;
                    }
                    let val;
                    computation = (prev * current);
                    val = computation.toString().slice(0, 10)
                    return parseFloat(val);
                }
                break
            case '/':
                computation = (makeDivide(computation));
                function makeDivide(computation) {
                    if (prev % 1 === 0 && current % 1 === 0) {
                        computation = (prev / current);
                        return computation;
                    }
                    let val;
                    computation = (prev / current);
                    val = computation.toString().slice(0, 10)
                    return parseFloat(val);
                }
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

changeSign.addEventListener('click', button => {
    calculator.changeSign();
    calculator.updateDisplay();
})