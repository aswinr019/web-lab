const stringInpt = document.getElementById("string");
const numberInpt = document.getElementById("number");
const btn = document.getElementById("btn");
const extracted = document.getElementById("ans");
let string;
let number;
let sliced;

btn.addEventListener("click", function () {
  string = stringInpt.value;
  number = numberInpt.value;

  if (string && number) {
    sliced = string.slice(0, number);
    extracted.textContent = sliced;
    console.log(sliced);
  }
});
