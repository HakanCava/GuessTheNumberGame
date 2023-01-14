//define variables
const body = document.querySelector("body");
const inputNum = document.querySelector("#input");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const box2 = document.querySelector(".box2");
const magicHat = document.querySelector("#magicHat");
const span = document.querySelector("#span");
let number = Math.floor(Math.random() * 100) + 1;
let count = 0;
let y = number;
let a = 1;
let b = 100;

window.addEventListener("load", () => inputNum.focus()); //*when page is loading,focus on 'input'

const refresh = () => window.location.reload(); //?refresh the page

inputNum.addEventListener("keydown", (event) => {
  //? when enter key is pressed,go to btn1 click function
  if (event.keyCode === 13) {
    btn1.click();
  }
});

btn1.addEventListener("click", () => {
  //? Control inputNum.value(x)==random number?
  let x = inputNum.value;
  if (0 < x && x <= 100) {
    count++;
    if (x == y) {
      congratulations(); //?go to congratulations function
    } else if (x < y) {
      a = x;
      box2.textContent = ` ${a}-${b}`;
      span.textContent = count;
    } else {
      b = x;
      box2.textContent = `${a}-${b}`;
      span.textContent = count;
    }
  } else {
    alert(`Please enter a number between 1-100`);
  }

  inputNum.value = "";
  inputNum.focus();
});

const congratulations = () => {
  span.textContent = count;
  box2.textContent = `Congratulations!`;
  body.style.backgroundImage = "linear-gradient(to right, red, yellow)"; //bacground color changed
  magicHat.setAttribute(
    "src",
    "https://www.funimada.com/assets/images/cards/big/congrats-9.gif"
  );

  magicHat.style.width = "15rem";

  setTimeout(function () {
    //!after user know the number,the page will reload in five seconds
    window.location.reload(1);
  }, 5000);
};

btn2.addEventListener("click", () => refresh()); //?when btn2 is pressed,go to refresh function

btn2.onmouseover = () => {
  btn2.style.cursor = "pointer";
  btn2.style.color = "crimson";
  btn2.style.backgroundColor = "white";
};
btn2.onmouseout = () => {
  btn2.style.cursor = "pointer";
  btn2.style.color = "white";
  btn2.style.backgroundColor = "crimson";
};

btn1.onmouseover = () => {
  btn1.style.cursor = "pointer";
  btn1.style.color = "crimson";
  btn1.style.backgroundColor = "white";
};
btn1.onmouseout = () => {
  btn1.style.cursor = "pointer";
  btn1.style.color = "white";
  btn1.style.backgroundColor = "crimson";
};
