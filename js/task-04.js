const counter = {
  value: 0,
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
};

const decrementBtnEl = document.querySelector('[data-action = "decrement" ]');

const incrementBtnEl = document.querySelector('[data-action =  "increment" ]');

const counterValue = document.querySelector("#value");

decrementBtnEl.addEventListener("click", function () {
  console.log("xxx");

  counter.decrement();

  counterValue.textContent = counter.value;
});

incrementBtnEl.addEventListener("click", function () {
  console.log("xx");

  counter.increment();

  counterValue.textContent = counter.value;
});
