const counterValue = document.querySelector(".counterValue");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const changeBy = document.getElementById("changeBy");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  counterValue.textContent =
    parseInt(counterValue.textContent) + changeBy.valueAsNumber;
});
decreaseBtn.addEventListener("click", () => {
  counterValue.textContent =
    parseInt(counterValue.textContent) - parseInt(changeBy.value);
});

changeBy.addEventListener("change", () => {
  const changeValue = changeBy.valueAsNumber;

  if (Number.isNaN(changeValue)) {
    changeBy.value = 1;
  } else if (changeValue < 0) {
    changeBy.value = 1;
  } else if (changeValue > 10) {
    changeBy.value = 10;
  }
});

resetBtn.addEventListener("click", () => {
  counterValue.textContent = 0;
  changeBy.value = 1;
});
