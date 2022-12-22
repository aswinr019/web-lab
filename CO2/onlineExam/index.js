const contentElmnt = document.getElementById("content");
const questionElmnt = document.getElementById("question");
const answersElmnt = document.getElementById("answers");
const resultElmnt = document.getElementById("result");
const nxtElmnt = document.getElementById("next");
const guidelineElmnt = document.getElementById("guidelines");

<<<<<<< HEAD

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
=======
let questionAnswers = [
  {
    q: "Which of the following can read and render HTML web pages",
    a: "server",
    b: "head tak",
    c: "web browser",
    d: "empty",
    ans: "c",
  },
  {
    q: "Identify the range of byte data types in JavaScript",
    a: "-10 to 9",
    b: "-128 to 127",
    c: "-32768 to 32767",
    d: "-2147483648 to 2147483647",
    ans: "b",
  },
  {
    q: "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript",
    a: "new",
    b: "new malloc",
    c: "alloc",
    d: "malloc",
    ans: "a",
  },
  {
    q: "The latest HTML standard is",
    a: "HTML 4.0",
    b: "HTML 5.0",
    c: "XML",
    d: "SGML",
    ans: "b",
  },
  {
    q: "Why were cookies designed?",
    a: "for server side programming",
    b: "for client side programming",
    c: "both a and b",
    d: "none",
    ans: "a",
  },
  {
    q: "What are variables used in JavaScript programs",
    a: "varying randomly",
    b: "storing numbers dates and other values",
    c: "used as header files",
    d: "none of the above",
    ans: "b",
  },
];

let score = 0;
let questionNumber = 0;

const renderResult = () => {
  resultElmnt.textContent = `You've got ${score} / ${questionAnswers.length} answers right!`;
  const nextBtn = document.createElement("button");
  nextBtn.setAttribute("id", "nxtBtn");
  nextBtn.textContent = "Restart";

  nxtElmnt.appendChild(nextBtn);

>>>>>>> 14cf813968d45fec103d62a137158bd780e4c480
  nextBtn.addEventListener("click", function () {
    window.location.reload();
  });
};
<<<<<<< HEAD
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
=======
const computeScore = (index, selected) => {
  if (selected.value == questionAnswers[index].ans) {
    score++;
  }
};
const renderQstynAnswrs = (index) => {
  guidelineElmnt.textContent = "";
  questionElmnt.textContent = "";
  answersElmnt.innerHTML = "";

  if (index < questionAnswers.length) {
    questionElmnt.textContent = `${index + 1}. ${questionAnswers[index].q}`;
    answersElmnt.innerHTML = `<input type="radio" name="${index}" value="a" id="${index}">${questionAnswers[index].a} <br>
    <input type="radio" name="${index}" value="b" id="">${questionAnswers[index].b} <br>
    <input type="radio" name="${index}" value="c" id="">${questionAnswers[index].c}<br>
    <input type="radio" name="${index}" value="d" id="">${questionAnswers[index].d}<br>`;

    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("id", "nxtBtn");
    nextBtn.textContent = "Next";

    nxtElmnt.appendChild(nextBtn);
    nextBtn.addEventListener("click", function () {
      let allSelected = document.querySelectorAll("input");
      let selected;
      allSelected.forEach((elm) => {
        if (elm.checked) {
          selected = elm;
        }
      });
      if (!selected) {
        nextBtn.setAttribute("id", "nxtBtnDanger");
      } else {
        computeScore(index, selected);
        index++;
        nxtElmnt.removeChild(nextBtn);
        renderQstynAnswrs(index);
      }
    });
>>>>>>> 14cf813968d45fec103d62a137158bd780e4c480
  } else {
    renderResult();
  }
};

<<<<<<< HEAD
const nextBtn = document.createElement("button");
nextBtn.setAttribute("id", "nxtBtn");
nextBtn.textContent = "Start";

nxtElmnt.appendChild(nextBtn);
nextBtn.addEventListener("click", function () {
  renderQstynAnswrs(i);
});
=======
const start = () => {
  guidelineElmnt.innerHTML = `<li>There are six questions in the exam.</li>
  <li>Please select atleast one answer before submitting.</li>
  <li>You cans view the result after submitting the last question.</li>`;

  const nextBtn = document.createElement("button");
  nextBtn.setAttribute("id", "nxtBtn");
  nextBtn.textContent = "Start";

  nxtElmnt.appendChild(nextBtn);

  nextBtn.addEventListener("click", function () {
    nxtElmnt.removeChild(nextBtn);
    renderQstynAnswrs(questionNumber);
  });
};

start();

// let index = 2;

// console.log(`${index + 1}. ${questionAnswers[index].q} `);
// let qstyns = [
//   "Which of the following can read and render HTML web pages",
//   "Identify the range of byte data types in JavaScript",
//   "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript",
//   "The latest HTML standard is",
//   "Why were cookies designed?",
//   "What are variables used in JavaScript programs",
// ];

// let qstynAnsrs = {
//   "Which of the following can read and render HTML web pages": {
//     server: false,
//     "head tak": false,
//     "web browser": true,
//     empty: false,
//   },
//   "Identify the range of byte data types in JavaScript": {
//     "-10 to 9": false,
//     "-128 to 127": true,
//     "-32768 to 32767": false,
//     "-2147483648 to 2147483647": false,
//   },

//   "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript":
//     {
//       new: true,
//       "new malloc": false,
//       alloc: false,
//       malloc: false,
//     },
//   "The latest HTML standard is": {
//     "HTML 4.0": false,
//     "HTML 5.0": true,
//     XML: false,
//     SGML: false,
//   },
//   "Why were cookies designed?": {
//     "for server side programming": true,
//     "for client side programming": false,
//     "both a and b": false,
//     none: false,
//   },
//   "What are variables used in JavaScript programs": {
//     "varying randomly": false,
//     "storing numbers dates and other values": true,
//     "used as header files": false,
//     "none of the above": false,
//   },
// };

// let count = 0;
// let i = 0;

// const renderResult = () => {
//   resultElmnt.textContent = `You've got ${count} / ${qstyns.length} answers right!`;
//   nextBtn.textContent = "";
//   nextBtn.addEventListener("click", function () {
//     window.location.reload();
//   });
// };

// const renderQstynAnswrs = (index) => {
//   guidelineElmnt.textContent = "";
//   questionElmnt.textContent = "";
//   answersElmnt.innerHTML = "";
//   if (index < qstyns.length) {
//     questionElmnt.textContent = `${index + 1}. ${qstyns[index]}`;
//     for (const key of Object.keys(qstynAnsrs[qstyns[index]])) {
//       answersElmnt.innerHTML += `<input type="radio" name="${index}" id="${
//         qstynAnsrs[qstyns[index]][key]
//       }"  value="${qstynAnsrs[qstyns[index]][key]}" class="options">${key}<br>`;
//     }
//     i++;
//     const optionElmnts = document.querySelectorAll("input");

//     optionElmnts.forEach((elm) => {
//       elm.addEventListener("click", function (e) {
//         console.log(e.target.value);
//         if (e.target.value == "true") {
//           count++;
//           console.log(count);
//         }
//       });
//     });

//     nextBtn.textContent = "Next";
//   } else {
//     renderResult();
//   }
// };

// const nextBtn = document.createElement("button");
// nextBtn.setAttribute("id", "nxtBtn");
// nextBtn.textContent = "Start";

// nxtElmnt.appendChild(nextBtn);
// nextBtn.addEventListener("click", function () {
//   renderQstynAnswrs(i);
// });
>>>>>>> 14cf813968d45fec103d62a137158bd780e4c480
