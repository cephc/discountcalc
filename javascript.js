function myFunction() {
var number1 = Number(document.getElementById("price").value);
var number2 = Number(document.getElementById("discount").value) / 100;
var totalValue = number1 - (number1 * number2)
document.getElementById("total").value = totalValue.toFixed(2);
}