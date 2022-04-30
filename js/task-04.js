//---------------------------Option 1--------------------------------------
const [decrement, spanValue, increment] =
  document.querySelector("#counter").children;

let counterValue = 0;
increment.addEventListener(
  "click",
  () => (spanValue.textContent = ++counterValue)
);
decrement.addEventListener(
  "click",
  () => (spanValue.textContent = --counterValue)
);

// function incrementCounterValue() {
//   spanValue.textContent = ++counterValue;
// }
// function decrementCounterValue() {
//   spanValue.textContent = --counterValue;
// }

//---------------------------Option 2--------------------------------------
// const counter = {
//   value: 0,
//   decrement() {
//     this.value--;
//     spanValue.textContent = this.value;
//   },
//   increment() {
//     this.value++;
//     spanValue.textContent = this.value;
//   },
// };

// decrement.addEventListener("click", counter.decrement.bind(counter));
// increment.addEventListener("click", counter.increment.bind(counter));

//------------------------Extra classes----------------------------------

// class Counter {
//   constructor(selector) {
//     this.initialValue = 0;
//     this.container = document.querySelector(selector);
//     this.incrementRef = this.container.querySelector(
//       '[data-action="increment"]'
//     );
//     this.decrementRef = this.container.querySelector(
//       '[data-action="decrement"]'
//     );
//     this.valueRef = this.container.querySelector("#value");

//     this.addListeners();
//   }

//   addListeners() {
//     this.incrementRef.addEventListener("click", this.increment);
//     this.decrementRef.addEventListener("click", this.decrement);
//   }
//   increment = () => {
//     this.initialValue++;
//     this.valueRef.textContent = this.initialValue;
//   };
//   decrement = () => {
//     this.initialValue--;
//     this.valueRef.textContent = this.initialValue;
//   };
// }

// const newCounter = new Counter("#counter");
// console.log(newCounter);
