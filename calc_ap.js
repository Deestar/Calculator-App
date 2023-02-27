let getInputLength = () => {
  let input = document.querySelector("input");
  let inputLength = input.value.length - 1;
  return inputLength;
};

let clear = () => {
  let input = document.querySelector("input");
  input.value = "";
};

let addInput = (value) => {
  let input = document.querySelector("input");
  input.value += value;
};
let getInput = () => {
  let input = document.querySelector("input");
  let strValue = input.value.toString();
  return [strValue];
};

let removeLast = () => {
  let input = document.querySelector("input");
  let value = input.value;
  let newValue = value.slice(0, -1);
  input.value = newValue;
};
//Evluating
let evalu = () => {
  let input = document.querySelector("input");
  let answer = eval(input.value);
  if (answer == undefined) {
    input.value = "";
  } else {
    input.value = answer;
  }
};
let getcalc = () => {
  return localStorage.getItem("clac-history") || [];
};

let storeHistory = (content) => {
  if (getcalc().length == 0) {
    let id = Math.floor(Math.random() * 1000);
    let calcs = {
      id: id,
      content: content[0],
    };
    let storeCalcs = JSON.stringify(calcs);
    localStorage.setItem("clac-history", `[${storeCalcs}]`);
  } else {
    let arr = JSON.parse(getcalc());
    let id = Math.floor(Math.random() * 1000);
    let calcs = {
      id: id,
      content: content[0],
    };
    arr.push(calcs);
    let storeCalcs = JSON.stringify(arr);
    localStorage.setItem("clac-history", storeCalcs);
  }
};

let operation = () => {
  let button = document.querySelectorAll("button");
  button.forEach((element, i) => {
    element.addEventListener("click", () => {
      if (element.id == "clear") {
        removeLast();
      } else if (element.id == "div") {
        addInput("/");
      } else if (element.id == "mul") {
        addInput("*");
      } else if (element.id == "seven") {
        addInput(7);
      } else if (element.id == "six") {
        addInput(6);
      } else if (element.id == "five") {
        addInput(5);
      } else if (element.id == "four") {
        addInput(4);
      } else if (element.id == "three") {
        addInput(3);
      } else if (element.id == "two") {
        addInput(2);
      } else if (element.id == "one") {
        addInput(1);
      } else if (element.id == "eight") {
        addInput(8);
      } else if (element.id == "nine") {
        addInput(9);
      } else if (element.id == "zero") {
        addInput(0);
      } else if (element.id == "back_right") {
        addInput(")");
      } else if (element.id == "brack_left") {
        addInput("(");
      } else if (element.id == "add") {
        addInput("+");
      } else if (element.id == "min") {
        addInput("-");
      } else if (element.id == "calc") {
        storeHistory(getInput());
        evalu();
      }
    });
    //double click to clear
    if (element.id == "clear") {
      element.ondblclick = () => {
        clear();
      };
    }
  });
};
let history = true;
let historyDisplay = () => {
  let history = document.querySelector("#history");
  history.addEventListener("click", () => {
    if (history) {
      let input = document.querySelector("input");
      if (getcalc().length > 0) {
        let arr = JSON.parse(getcalc());
        arr.forEach((e) => {
          input.value += `|| ${e.content}    `;
        });
        history = false;
      } else {
        input.value = "No history";
        history = false;
      }
    } else {
      clear();
      history = true;
    }
  });
};

let backChange = () => {
  let button = document.querySelectorAll("button");
  let display = document.querySelector(".display");
  let full = document.querySelector(".calc_body");
  let change = document.querySelector("#bck_change");
  let history = document.querySelector("#history");
  let top = document.querySelector(".back_change_cont");
  let body = document.querySelector(".operator");
  let clear = document.querySelector("#clear");
  let oper = document.querySelectorAll(".oper_tor");
  let bck = "white";
  change.addEventListener("click", () => {
    if (bck == "white") {
      full.style.background = "rgb(11, 34, 30)";
      change.style.background = "white";
      button.forEach((e) => {
        e.style.color = " rgb(245, 245, 245)";
      });
      display.style.background = "rgb(11, 34, 30)";
      display.style.color = "white";
      clear.style.color = "red";
      oper.forEach((e) => {
        e.style.color = "red";
      });
      history.style.color = "orange";
      bck = "black";
    } else {
      full.style.background = "white";
      change.style.background = "black";
      button.forEach((e) => {
        e.style.color = " black";
      });
      display.style.background = "white";
      display.style.color = "black";
      clear.style.color = "red";
      oper.forEach((e) => {
        e.style.color = "red";
      });
      history.style.color = "black";
      bck = "white";
    }
  });
};
operation();
// change();
historyDisplay();
backChange();
