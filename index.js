let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

console.log(countEl);
console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0; // changing the content on screen to 0
  count = 0; // reseting the var count to 0
}
