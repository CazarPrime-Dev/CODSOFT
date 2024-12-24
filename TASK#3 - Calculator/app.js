const display = document.getElementById("display");
let resultDisplayed = false; 

function appendToDisplay(input) {
    
    if (resultDisplayed) {
        display.value = ""; 
        resultDisplayed = false; 
    }
    display.value += input;
}

function clearFunction() {
    display.value = "";
    resultDisplayed = false; 
}

function resultatFunction() {
    try {
        display.value = eval(display.value);
        resultDisplayed = true; 
    } catch (e) {
        display.value = "Error"; 
        resultDisplayed = false; 
    }
}