var numericValue = 0;

window.onload = function() { // This function runs when the HTML page finishes loading

    var numericValueElement = document.getElementById("counterValue");

    loadJSON("data.json", function(response) {
        var data = JSON.parse(response);
        data.counter = new Number(data.counter);
        numericValueElement.textContent = data.counter;
        numericValue = data.counter;
    });
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

function loadJSON(filePath, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", filePath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}