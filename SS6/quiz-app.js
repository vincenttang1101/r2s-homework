const myQuestions = [
  {
    question: "Javascript is_________language",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of Javascript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    correctAnswer: "c",
  },
];

const title = document.createElement("p");
title.innerHTML = "<h1>Quiz App</h1>";
document.body.appendChild(title);

let score = 0;

function checkAnswer(index, selected) {
  if (selected === myQuestions[index].correctAnswer) {
    console.log("co diem r");
  }
}

myQuestions.forEach(function (data, index) {
  const questionHTML = `
  <h3>Câu ${index + 1}: ${data.question}</h3>
  <p>
    <input type="radio" name="question${index}" value="a" /> ${
    data.answers.a
  }<br />
    <input type="radio" name="question${index}" value="b" /> ${
    data.answers.b
  }<br />
    <input type="radio" name="question${index}" value="c" /> ${
    data.answers.c
  }<br />
    <input type="radio" name="question${index}" value="d" /> ${
    data.answers.d
  }<br />
  </p>
`;

  const radios = document.getElementsByName(`question${index}`);
  radios.forEach(function (radio) {
    radio.addEventListener("click", function () {
      console.log(radio);
      checkAnswer(index, radio.value);
    });
  });

  document.body.insertAdjacentHTML("beforeend", questionHTML);
});

const nopBai = document.createElement("input");
nopBai.type = "button";
nopBai.value = "Nộp bài";
nopBai.addEventListener("click", function () {
  alert("Total points you have received: " + score);
});
document.body.appendChild(nopBai);
