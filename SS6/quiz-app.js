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

let score = 0;
let currentQuestionIndex = 0;

const quizContainer = document.createElement("div");
const btnContainer = document.createElement("div");

const nextBtn = document.createElement("input");
nextBtn.type = "button";
nextBtn.value = "Next";

const prevBtn = document.createElement("input");
prevBtn.type = "button";
prevBtn.value = "Previous";

document.body.append(title, quizContainer, btnContainer);
btnContainer.append(nextBtn, prevBtn);

btnContainer.style.display = "flex";
btnContainer.style.gap = "0.5rem";

function checkAnswer(index, selectedValue) {
  if (selectedValue === myQuestions[index].correctAnswer) {
    score++;
  } else {
    if (score > 0) score--;
  }
}

const userAnswers = new Array(myQuestions.length);

function onAnswerSelected(index, value) {
  userAnswers[index] = value;
}

function showQuestion(index) {
  const data = myQuestions[index];
  const questionHTML = `
  <h3>Câu ${index + 1}: ${data.question}</h3>
  <p>
    <input type="radio" name="question${index}" value="a" ${
    userAnswers[index] === "a" ? "checked" : ""
  } onclick="onAnswerSelected(${index}, 'a')" /> ${data.answers.a}<br />
    <input type="radio" name="question${index}" value="b" ${
    userAnswers[index] === "b" ? "checked" : ""
  } onclick="onAnswerSelected(${index}, 'b')" /> ${data.answers.b}<br />
    <input type="radio" name="question${index}" value="c" ${
    userAnswers[index] === "c" ? "checked" : ""
  } onclick="onAnswerSelected(${index}, 'c')" /> ${data.answers.c}<br />
    <input type="radio" name="question${index}" value="d" ${
    userAnswers[index] === "d" ? "checked" : ""
  } onclick="onAnswerSelected(${index}, 'd')" /> ${data.answers.d}<br />
  </p>
`;

  quizContainer.innerHTML = questionHTML;

  const radios = document.getElementsByName(`question${index}`);
  radios.forEach(function (radio) {
    radio.addEventListener("click", function () {
      checkAnswer(index, radio.value);
    });
  });

  if (index === myQuestions.length - 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex >= myQuestions.length) {
    currentQuestionIndex = 0;
  }
  showQuestion(currentQuestionIndex);
});

prevBtn.addEventListener("click", function () {
  currentQuestionIndex--;
  if (currentQuestionIndex < 0) {
    alert("Bug!");
  }
  showQuestion(currentQuestionIndex);
});

const submitBtn = document.createElement("input");
submitBtn.type = "button";
submitBtn.value = "Submit";
submitBtn.style.display = "none";

submitBtn.addEventListener("click", function () {
  alert("Total points you have received: " + score);
  showQuestion(0);
});

btnContainer.append(submitBtn);

showQuestion(currentQuestionIndex);
