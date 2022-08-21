
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
const operatorBtn = document.querySelectorAll(".operator")
const numberBtn = document.querySelectorAll(".digits")
const equalsBtn = document.getElementById('equal')
const allClearBtn = document.querySelector('.ac')
const deleteBtn = document.querySelector('.c')


function operate(oepration) {

    switch (oepration) 
    {
        case "%": 
            result = num1 % num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/": 
            result = num1 / num2;
            break;
    }
    return result;
}

class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clearDisplay();
    }
    
    clearDisplay() {
       this.currentOperand = '';
       this.previousOperand = '';
       this.operation = undefined;
   }
    delete() {
       this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNubmer(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    chooseOperation(operation){
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) 
        {
            case "%": 
                computation = prev % current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "+":
                computation = prev + current;
                break;
            case "×":
                computation = prev * current;
                break;
            case "÷": 
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    getDispalyNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
       let integerDispaly;
       if (isNaN(integerDigits)) {
        integerDispaly = '';
       } else {
        integerDispaly = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
       }
       if (decimalDigits != null) {
        return `${integerDispaly}.${decimalDigits}`
       } else {
        return integerDispaly;
       }
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDispalyNumber(this.currentOperand);
        if (this.oepration != null) {
            this.previousOperandTextElement.innerText = `${this.getDispalyNumber(this.previousOperand)} ${this.operation}`
        }
        else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNubmer(button.innerText);
        calculator.updateDisplay();
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click',button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearBtn.addEventListener('click', button => {
    calculator.clearDisplay();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
