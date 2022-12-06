
const options = document.getElementById("options");
const content = document.getElementById("content");

const binary = () => {
  content.innerHTML = "";
  const binaryInpt = document.createElement("input");
  const decimalOutpt = document.createElement("input");
  const btn = document.createElement("button");
  const br = document.createElement("br");

  binaryInpt.setAttribute("type", "text");
  binaryInpt.setAttribute("placeholder", "Enter a binary number");

  decimalOutpt.setAttribute("type", "text");
  decimalOutpt.setAttribute("placeholder", "Decimal equivalent");

  btn.textContent = "Convert";

  content.appendChild(binaryInpt);
  content.appendChild(btn);
  content.appendChild(br);
  content.appendChild(decimalOutpt);

  btn.addEventListener("click", function () {
    if (binaryInpt.value && !isNaN(binaryInpt.value)) {
      // console.log(binaryInpt.value);
      let decimal = parseInt(binaryInpt.value, 2);
      if (isNaN(decimal)) {
        decimalOutpt.value = "please enter a binary number";
      } else {
        decimalOutpt.value = decimal;
      }
    }
  });
};

const emptyString = () => {
  content.innerHTML = "";

  const stringInpt = document.createElement("input");
  const btn = document.createElement("button");
  const para = document.createElement("p");

  stringInpt.setAttribute("id", "string");
  stringInpt.setAttribute("placeholder", "Enter a string");

  btn.textContent = "Check";

  content.appendChild(stringInpt);
  content.appendChild(btn);
  content.appendChild(para);

  btn.addEventListener("click", function () {
    if (
      stringInpt.value == "" ||
      stringInpt.value == " " ||
      stringInpt.value == "  "
    ) {
      para.textContent = "Empty string";
    } else {
      para.textContent = "String is not empty";
    }
  });
};

const extractChars = () => {
  content.innerHTML = "";
  const stringInpt = document.createElement("input");
  const numberInpt = document.createElement("input");
  const btn = document.createElement("button");
  const extracted = document.createElement("p");
  const br = document.createElement("br");
  const br2 = document.createElement("br");

  stringInpt.setAttribute("placeholder", "Enter a string");
  numberInpt.setAttribute("placeholder", "Enter the number of chars");
  btn.textContent = "Extract";

  content.appendChild(stringInpt);
  content.appendChild(br);
  content.appendChild(numberInpt);
  content.appendChild(btn);
  content.appendChild(br2);
  content.appendChild(extracted);

  btn.addEventListener("click", function () {
    let string = stringInpt.value;
    let number = numberInpt.value;

    if (string && number) {
      let sliced = string.slice(0, number);
      extracted.textContent = sliced;
    }
  });
};

const countSubStringOcc = () => {
  content.innerHTML = "";

  const stringInput = document.createElement("input");
  const subStringInput = document.createElement("input");
  const btn = document.createElement("button");
  const countElm = document.createElement("p");
  const br = document.createElement("br");

  stringInput.setAttribute("placeholder", "Enter a string");
  subStringInput.setAttribute("placeholder", "Enter substring");

  btn.textContent = "Count";
  content.appendChild(stringInput);
  content.appendChild(br);
  content.appendChild(subStringInput);
  content.appendChild(btn);
  content.appendChild(countElm);

  btn.addEventListener("click", function () {
    let string = stringInput.value;
    let subString = subStringInput.value;

    if (string && subString) {
      let regx = new RegExp(subString, "gi");
      let count = (string.match(regx) || []).length;

      console.log(count);
      countElm.textContent = `Count of substring is ${count}`;
    }
  });
};

const stringLength = () => {
  content.innerHTML = "";

  const stringInput = document.createElement("input");
  const btn = document.createElement("button");
  const countElm = document.createElement("p");

  stringInput.setAttribute("placeholder", "Enter a string");

  btn.textContent = "Count";
  content.appendChild(stringInput);
  content.appendChild(btn);
  content.appendChild(countElm);

  btn.addEventListener("click", function () {
    if (stringInput.value && isNaN(stringInput.value)) {
      let count = stringInput.value.length;

      countElm.textContent = `The length of string is ${count}`;
    } else {
      countElm.textContent = `Please enter a valid string`;
    }
  });
};

const squareRoot = () => {
  content.innerHTML = "";

  const numberInpt = document.createElement("input");
  const btn = document.createElement("button");
  const para = document.createElement("p");

  numberInpt.setAttribute("placeholder", "Enter a number");

  btn.textContent = "Find";

  content.appendChild(numberInpt);
  content.appendChild(btn);
  content.appendChild(para);

  btn.addEventListener("click", function () {
    if (numberInpt.value && !isNaN(numberInpt.value)) {
      let sr = Math.sqrt(numberInpt.value);
      para.textContent = `Square root is ${sr}`;
    }
  });
};


//selecting options

options.addEventListener("change", function () {
  let option = options.value;

  switch (option) {
    case "1": {
      binary();
      break;
    }
    case "2": {
      emptyString();
      break;
    }
    case "3": {
      extractChars();
      break;
    }
    case "4": {
      countSubStringOcc();
      break;
    }
    case "5": {
      stringLength();
      break;
    }
    case "6": {
      squareRoot();
      break;
    }
  }
});
