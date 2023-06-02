function buttonPressed(buttonVal) {
  document.getElementById("input-box").value += buttonVal;
}

function calculate() {
  var result = 0;
  try {
    var expression = document.getElementById("input-box").value;
    result = eval(expression);
    document.getElementById("input-box").value = result;
  } catch (err) {
    alert("Invalid expression");
  }
}
