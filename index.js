const counterValue = document.querySelector(".counterValue");
const increaseBtn = document.getElementsByClassName("increase");
const decreaseBtn = document.getElementsByClassName("decrease");
const changeBy = document.getElementsById("changeBy");
console.log(counterValue.textContent);
increaseBtn.addEventListener("click", () => {
  counterValue.textContent = counterValue.textContent + changeBy.valueAsNumber;
});
decreaseBtn.addEventListener("click", () => {
  counterValue.textContent = counterValue.textContent - changeBy.valueAsNumber;
});
