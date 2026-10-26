let inputField = document.querySelector('input');
const clearButton = document.querySelector("#clear");
const deleteLast = document.querySelector("#delete");
const calculate = document.querySelector("#calculate");
const userInput = document.querySelector(".operators");
const displayResult = document.querySelector(".answer")

let value1 = ''
let op = ''
let value2 = ''
let value = '';
let isOperatorClicked = false;

clearButton.addEventListener('click', () => {
    inputField.value = '';
    value = inputField.value;
    value1 = '';
    value2 = '';
    op = '';
    displayResult.textContent = '';
});

deleteLast.addEventListener("click", () => {
    let newValue = value.split('');
    newValue.pop();
    inputField.value = newValue.join('');
    value = inputField.value;
});


calculate.addEventListener("click", cal);

function cal() {

    let result;
    value1 = Number(value1)
    value2 = Number(value2);
    
    switch (op) {
        case '+': {
            result = add(value1, value2);
            break;
        };
        case '-': {
            result = sub(value1, value2);
            break;
        };
        case '*': {
            result = multiply(value1, value2);
            break;
        };
        case '/': {
            if(value2 === 0){
                result = "Cannot divide by 0";
            }
            result = divide(value1, value2);
            break;
        };
    };

    console.log(`value1 ${value1} ops ${op}  value2 ${value2}`);
    console.log(result);
    value1 = result;
    value = value1;
    isOperatorClicked = false;
    return displayResult.textContent = result;
    
}

userInput.addEventListener('click', (event) => {
    let numCheck = '1234567890.';
    let opsCheck = '-/*+';
    let clicked = event.target.textContent;
    let clickedNumber = numCheck.includes(clicked);
    let clickedOps = opsCheck.includes(clicked);

    
    if(clickedNumber){
        console.log(value)
        if(!isOperatorClicked){
            value = value + clicked;
            console.log(value)
            inputField.value = value;
        }else{
            value = value + clicked;
            inputField.value = value;
            let arrayFormed = value.split(op);
            value2 = arrayFormed[1];
            console.log(arrayFormed)
        }
    }

    if(clickedOps) {

        if(isOperatorClicked){
            cal();
            //return;
        }
        value1 = value;
        op = clicked;
        isOperatorClicked = true;

        value = value + clicked
        inputField.value = value;
    }

})


function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    return a/b ;
}
