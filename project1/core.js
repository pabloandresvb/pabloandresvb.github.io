var numericValue = 0;

window.onload = function() { // This function runs when the HTML page finishes loading

    // Set the numeric value to 0
    var numericValueElement = document.getElementById("counterValue");
    numericValueElement.textContent = numericValue;
};

var numericValueElement = document.getElementById("counterValue");
var increaseButton = document.getElementById("btnIncrease");
var decreaseButton = document.getElementById("btnDecrease");
var resetButton = document.getElementById("btnReset");

increaseButton.addEventListener("click", function() {
    numericValue++;
    numericValueElement.textContent = numericValue;
});

decreaseButton.addEventListener("click", function() {
    if (numericValue > 0) {
        numericValue--;
        numericValueElement.textContent = numericValue;
    }
});

resetButton.addEventListener("click", function() {
    numericValue = 0;
    numericValueElement.textContent = numericValue;
});