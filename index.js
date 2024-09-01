const screen = document.getElementById("screen");
const onOffBtn = document.querySelector(".onOff-btn");
const calcBtns = document.querySelectorAll(".btn");
const buttons = document.querySelectorAll("button:not(.onOff-btn)");
const equal = document.querySelector(".equal");
const delBtn = document.querySelector(".del");
const sqrt = document.querySelector(".maron");

let isOn = true;

screen.textContent = "";

function toggleCalculator() {
  isOn = !isOn;
  if (isOn) {
    onOffBtn.textContent = "ON";
    onOffBtn.style.background = "green";
    screen.textContent = "";
  } else {
    onOffBtn.textContent = "OFF";
    onOffBtn.style.background = "red";
    screen.textContent = "0";
    calculate();
  }
}

onOffBtn.addEventListener("click", () => {
  toggleCalculator();
});

const calculate = () => {
  function updateDisplay(value) {
    if (screen.textContent === "0") {
      screen.textContent = value;
    } else {
      screen.textContent += value;
    }
  }

  const delToZero = () => {
    let data = screen.textContent;
    screen.textContent = data.slice(0, -1);
    if (screen.textContent === "") screen.textContent = "0";
  };

  calcBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateDisplay(btn.textContent);
    });
  });

  equal.addEventListener("click", () => {
    let data = screen.textContent;
    if (data === "") {
      screen.textContent = "";
    } else {
      try {
        screen.textContent = eval(data.replace("÷", "/").replace("×", "*"));
      } catch {
        screen.textContent += "Error";
      }
    }
  });

  delBtn.addEventListener("click", () => {
    delToZero();
  });

  sqrt.addEventListener("click", () => {
    let data = screen.textContent;
    screen.textContent = Math.sqrt(data);
  });
};
