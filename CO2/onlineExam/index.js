const contentElmnt = document.getElementById("content");
const questionElmnt = document.getElementById("question");
const answersElmnt = document.getElementById("answers");
const resultElmnt = document.getElementById("result");
const nxtElmnt = document.getElementById("next");
const guidelineElmnt = document.getElementById("guidelines");


let qstyns = [
  "Which of the following can read and render HTML web pages",
  "Identify the range of byte data types in JavaScript",
  "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript",
  "The latest HTML standard is",
  "Why were cookies designed?",
  "What are variables used in JavaScript programs",
];

let qstynAnsrs = {
  "Which of the following can read and render HTML web pages": {
    "server": false,
    "head tak": false,
    "web browser": true,
    "empty": false,
  },
  "Identify the range of byte data types in JavaScript": {
    "-10 to 9": false,
    "-128 to 127": true,
    "-32768 to 32767": false,
    "-2147483648 to 2147483647": false,
  },

  "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript":
    {
      "new": true,
      "new malloc": false,
      "alloc": false,
      "malloc": false,
    },
  "The latest HTML standard is": {
    "HTML 4.0": false,
    "HTML 5.0": true,
    "XML": false,
   "SGML": false,
  },
  "Why were cookies designed?": {
    "for server side programming": true,
    "for client side programming": false,
    "both a and b": false,
    "none": false,
  },
  "What are variables used in JavaScript programs": {
    "varying randomly": false,
    "storing numbers dates and other values": true,
    "used as header files": false,
    "none of the above": false,
  },
};

let count = 0;
let i = 0;

const renderResult = () => {
  resultElmnt.textContent = `You've got ${count} answers right!`;
  nextBtn.textContent = "Restart";
  nextBtn.addEventListener("click", function () {
    window.location.reload();
  });
};
const renderQstynAnswrs = (index) => {
  guidelineElmnt.textContent ="";
  questionElmnt.textContent = "";
  answersElmnt.innerHTML = "";
  if (index < 6) {
    questionElmnt.textContent = `${index + 1}. ${qstyns[index]}`;
    for (const key of Object.keys(qstynAnsrs[qstyns[index]])) {
      answersElmnt.innerHTML += `<input type="radio" name="${index}" id="${
        qstynAnsrs[qstyns[index]][key]
      }"  value="${
        qstynAnsrs[qstyns[index]][key]
      }" class="options">${key}</input><br>`;
    }
    i++;
    const optionElmnts = document.querySelectorAll("input");
    // console.log(optionElmnts);

    optionElmnts.forEach((elm) => {
      elm.addEventListener("click", function (e) {
        console.log(e.target.value);
        if (e.target.value == "true") {
          count++;
          console.log(count);
        }
      });
    });
    // optionElmnts.addEventListener("click",function(){
    //     if(document.getElementById(`${qstynAnsrs[qstyns[index]][key]}`).checked == true) {
    //         // count++;
    //         console.log(true)
    //      }
    // })
    nextBtn.textContent = "Next";
  } else {
    renderResult();
  }
};

const nextBtn = document.createElement("button");
nextBtn.setAttribute("id", "nxtBtn");
nextBtn.textContent = "Start";

nxtElmnt.appendChild(nextBtn);
nextBtn.addEventListener("click", function () {
  renderQstynAnswrs(i);
});
