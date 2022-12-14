let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let equalsButton = document.querySelector('[data-equals]')
let deleteButton = document.querySelector('[data-delete]')
let clearButton = document.querySelector('[data-all-clear]')
let previousOperand = document.querySelector('[data-previous-operand]')
let currentOperand = document.querySelector('[data-current-operand]')
let currentSign = document.querySelector('[data-sign]')
let topValue = '';
let botValue = '';
let operation = '';

function clear(){
    previousOperand.innerText = '0';
    currentOperand.innerText = '';
    currentSign.innerText = '';
}
function deleteF(){
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
}

function add (a, b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    if(b==0){
        return 'Division on zero is PROHIBITED';
    }
    return a/b;
}

function operate (operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(Number(num1), Number(num2))
            break;
            case "-":
            result = subtract(Number(num1), Number(num2))
            break;
            case "*":
            result = multiply(Number(num1), Number(num2))
            break;
            case "÷":
            result = divide(Number(num1), Number(num2))
            break;
    }
    previousOperand.innerText = result;
    currentOperand.innerText = '';                 //сука где то здесь баг
    return result;
}


function appendNumber(number){
    currentOperand.innerText += number.toString();
    
}




numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.innerText === '.' && currentOperand.innerText.includes('.')) return
        if(currentSign.innerText===''){
            previousOperand.innerText = '';
        }
        currentOperand.innerText += button.innerText.toString();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{

        
       
        if(previousOperand.innerText==='' || previousOperand.innerText==='Division on zero is PROHIBITED' || previousOperand.innerText=='0'){
            previousOperand.innerText = currentOperand.innerText;
            currentOperand.innerText = '';
            operation = button.innerText;
            currentSign.innerText = operation;
            return;
        }

        if(currentOperand.innerText==='' || currentOperand.innerText==0){
            operation = button.innerText;
            currentSign.innerText = operation;
            return;
        }

        operate(operation, previousOperand.innerText, currentOperand.innerText)
        operation = button.innerText;
        currentSign.innerText = operation;
        

        
    })
})

clearButton.addEventListener('click', ()=>{
    this.clear();
});
deleteButton.addEventListener('click', ()=>{
    this.deleteF();
})
equalsButton.addEventListener('click', ()=>{
    if(currentOperand.innerText==='') return;
    operate(operation, previousOperand.innerText, currentOperand.innerText)
    currentSign.innerText='';
})









clear();

