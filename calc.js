let err = "Enter valid number";

let value1 = prompt("Enter Your First Value");
value1 = Number(value1);

while(value1 == NaN){
    alert(err);
    value1 = prompt("Enter Your First Value");
    value1 = Number(value1);
}

let operator = prompt("Enter Your Operator");
let value2 = prompt("Enter Your Second Value");
value2 = Number(value2);

while(value2 == NaN){
    alert(err);
    value2 = prompt("Enter Your First Value");
    value2 = Number(value2);
}

switch(operator) {
    case '+' : {
        let result = add(value1, value2);
        alert(result);
        break;
    };
    case '-' : {
        let result = sub(value1 , value2);
        alert(result);
        break;
    };
    case '*' : {
        let result = multiply(value1, value2);
        alert(result);
        break;
    }
    case '/' : {
        if (value2 === 0){
            alert("Cannot divide a number by 0");
        }
        let result = divide(value1, value2);
        alert(result);
    }
}


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
