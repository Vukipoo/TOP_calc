let a = null;
let b = null;
let opp = null;


const display = document.querySelector('.display')
const numButtons = document.querySelectorAll('.buttons .num')
const symbolButtons = document.querySelectorAll('.buttons .symbol')
const ac = document.querySelector('.ac')
ac.addEventListener('click', () => {
    display.textContent = null
})
//a for each loop that loops through all the buttons
//assining each one a click event listener that displays
//its assigned html
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (opp === null) {
            if (a === null) {
                a = parseFloat(button.textContent);
                display.textContent = a;
            } else {
                a = parseFloat(a.toString() + button.textContent);
                display.textContent = a;
            }
        } else {
            if (b === null) {
                b = parseFloat(button.textContent);
                display.textContent = b;
            } else {
                b = parseFloat(b.toString() + button.textContent);
                display.textContent = b;
            }
        }
    });
});

symbolButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        display.textContent += button.textContent
        opp = button.textContent
    })
})
//equals function
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    const result = operate(a, b, opp)
    display.textContent = result
})

//4 Basic math operators 
function add (a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}

//Operator function
function operate(a, b, opp){
    switch(opp){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a,b)
    
       
    }
}

