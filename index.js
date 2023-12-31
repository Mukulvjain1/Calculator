let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

function handleEquals() {
  if (string.includes("%")) {
    string = string.replace(/%$/, "") / 100;
  } else {
    string = eval(string);
  }
}

function handleAC() {
  string = ""; // Change from " " to ""
}

function handleDel() {
  string = string.slice(0, -1);
}

function handlePer() {
  let lastNumIndex = string.search(/\d(?!.*\d)/);
  if (lastNumIndex !== -1) {
    let lastNum = string.substring(lastNumIndex);
    string = string.substring(0, lastNumIndex) + lastNum / 100;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.innerHTML.trim();

    if (buttonValue == "=") {
      handleEquals();
    } else if (buttonValue == "AC") {
      handleAC();
    } else if (buttonValue == "Del") {
      handleDel();
    } else if (buttonValue == "%") {
      handlePer();
    } else {
      string += buttonValue;
    }

    input.value = string;
  });
});
