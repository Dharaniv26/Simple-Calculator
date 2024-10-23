var inputScreen = document.getElementById("input-screen");
function disp(num) {
  inputScreen.value += num;
}
function solve() {
  try {
    inputScreen.value = eval(inputScreen.value);
  } catch (err) {
    alert("invalid");
  }
}
function Clear() {
  inputScreen.value = "";
}
function del() {
  inputScreen.value = inputScreen.value.slice(0, -1);
}
