const quizData = [
  {
    question: '1 Select ONE option',
    image: 'images/Question45.png',
    options: [
      "Performing the impact analysis of a change will give information about the completion of the tests",
      "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk",
      "Performing the impact analysis of a change will help selecting the right test cases for regression testing",
      "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
    ],
    answer: 'Performing the impact analysis of a change will help selecting the right test cases for regression testing'
  },
  {
    question: '2 Select ONE option',
    image: 'images/Question46.png',
    options: [
      "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team",
      "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines",
      "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system",
      "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
    ],
    answer: 'When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer'
  },
  {
    question: '3 Select ONE option',
    image: 'images/Question47.png',
    options: [
      "Dynamic testing cannot be performed early in the SDLC",
      "Static testing cannot be performed early in the SDLC",
      "Test planning cannot be performed early in the SDLC",
      "Acceptance testing can be performed early in the SDLC"
    ],
    answer: 'Dynamic testing cannot be performed early in the SDLC'
  },
  {
    question: '4 Select ONE option',
    image: 'images/Question48.png',
    options: [
      "i, ii, iv are advantages; iii, v are not",
      "iii, v are advantages; i, ii, iv are not",
      "Constant availability of executable software",
      "i, iii are advantages; ii, iv, v are not",
      "ii, iv, v are advantages; i, iii are not"
    ],
    answer: 'i, iii are advantages; ii, iv, v are not'
  },
  {
    question: '5 Select ONE option',
    image: 'images/Question49.png',
    options: [
      "Functional, because the test cases cover the user’s business requirement for the system",
      "Non-functional, because the measure the system’s performance",
      "Functional, because the test cases interact with the user interface",
      "Structural, because we need to know the internal structure of the program to measure the order processing time"
    ],
    answer: 'Non-functional, because the measure the system’s performance'
  },
  {
    question: '6 Select ONE option',
    image: 'images/Question50.png',
    options: [
      "Maintenance testing",
      "Regression testing",
      "Component testing",
      "Integration testing"
    ],
    answer: 'Maintenance testing'
  },
  {
    question: '7 Select ONE option',
    image: 'images/Question51.png',
    options: [
      "i and iv can be reviewed; ii, iii and v cannot",
      "i, ii, iii and iv can be reviewed; v cannot",
      "i, ii, iii, and v can be reviewed; iv cannot",
      "iii, iv, v can be reviewed; i and ii cannot",
    ],
    answer: 'i, ii, iii, and v can be reviewed; iv cannot'
  },
  {
    question: '8 Select ONE option',
    image: 'images/Question52.png',
    options: [
      "i, iv, v are true for static testing; ii, iii are true for dynamic testing",
      "i, iii, iv are true for static testing; ii, v are true for dynamic testing",
      "ii, iii are true for static testing; i, iv, v are true for dynamic testing",
      "ii, iv, v are true for static testing; i, iii, iv are true for dynamic testing",
    ],
    answer: 'ii, iv, v are true for static testing; i, iii, iv are true for dynamic testing'
  },
  {
    question: '9 Select ONE option',
    image: 'images/Question53.png',
    options: [
      "Some reviews do not require more than one role",
      "The review process has several activities",
      "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types",
      "Defects found during the review are not reported since they are not found by dynamic testing"
    ],
    answer: 'The review process has several activities'
  },
  {
    question: '10 Select ONE option',
    image: 'images/Question54.png',
    options: [
      "Taking overall responsibility for the review",
      "Deciding what is to be reviewed",
      "Ensuring the effective running of review meetings, and mediating, if necessary",
      "Recording review information such as review decisions"
    ],
    answer: 'Deciding what is to be reviewed'
  },
  {
    question: '11 Select ONE option',
    image: 'images/Question55.png',
    options: [
      "11, 12, 13",
      "10, 12, 14",
      "10, 11, 12, 13, 14",
      "10, 11, 13, 14"
    ],
    answer: '10, 11, 12, 13, 14'
  },
  {
    question: '12 Select ONE option',
    image: 'images/Question56.png',
    options: [
      "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases",
      "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved",
      "If 100% statement coverage is achieved, then 100% branch coverage is also achieved",
      "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
    ],
    answer: 'If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised'
  },
  {
    question: '13 Select ONE option',
    image: 'images/Question57.png',
    options: [
      "Black-box",
      "Exploratory",
      "Checklist-based",
      "Error guessing",
    ],
    answer: 'Checklist-based'
  },
  {
    question: '14 Select ONE option',
    image: 'images/Question58.png',
    options: [
      "User stories are created by testers and developers and then accepted by business representatives",
      "User stories are created by business representatives, developers, and testers together",
      "User stories are created by business representatives and verified by developers and testers",
      "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
    ],
    answer: 'User stories are created by business representatives, developers, and testers together'
  },
  {
    question: '15 Select ONE option',
    image: 'images/Question59.png',
    options: [
      "Communication",
      "Risk register",
      "Context of testing",
      "Test approach"
    ],
    answer: 'Test approach'
  },
  {
    question: '16 Select ONE option',
    image: 'images/Question60.png',
    options: [
      "The product owner has to step in and make a final decision",
      "Accept 13 as the final test estimate as this has most of the votes",
      "No further action is needed. Consensus has been reached",
      "Remove the new feature from the current release because consensus has not been reached",
    ],
    answer: 'Accept 13 as the final test estimate as this has most of the votes'
  },
  {
    question: '17 Select ONE option',
    image: 'images/Question61.png',
    options: [
      "The test pyramid emphasizes having a larger number of tests at the lower test levels",
      "The closer to the top of the pyramid, the more formal your test automation should be",
      "Usually, component testing and component integration testing are automated using APIbased tools",
      "For system testing and acceptance testing, the automated tests are typically created using GUI-based tools"
    ],
    answer: 'The closer to the top of the pyramid, the more formal your test automation should be'
  },
  {
    question: '18 Select ONE option',
    image: 'images/Question62.png',
    options: [
      "It is also very high. High risk impact always implies high risk likelihood",
      "It is very low. High risk impact always implies low risk likelihood",
      "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.",
      "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
    ],
    answer: 'One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.'
  },
  {
    question: '19 Select ONE option',
    image: 'images/Question63.png',
    options: [
      "i, iv are project risks; ii, iii, v are not project risks",
      "iv, v are project risks; i, ii, iii are not project risks",
      "i, iii are project risks; ii, iv, v are not project risks",
      "ii, v are project risks; i, iii, iv are not project risks"
    ],
    answer: 'i, iv are project risks; ii, iii, v are not project risks'
  },
  {
    question: '20 Select ONE option',
    image: 'images/Question64.png',
    options: [
      " The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date",
      'One of the identified risks was "Lack of support of open-source databases", so the team decided to integrate the system with an open-source database',
      "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing",
      "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC",
    ],
    answer: 'Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC'
  },
  {
    question: '21 Select ONE option',
    image: 'images/Question65.png',
    options: [
      "Number of defects found during system testing / Number of defects found divided by the size of a work product",
      "Total effort on test design divided by the number of designed test cases",
      "Number of executed test procedures",
      "Time needed to repair a defect"
    ],
    answer: 
      'Number of defects found during system testing / Number of defects found divided by the size of a work product',
    
  },
  {
    question: '22 Select ONE option',
    image: 'images/Question66.png',
    options: [
      "Impediments to testing",
      "Branch coverage achieved",
      "Test progress",
      "New risks within the test cycle"
    ],
    answer: 'Branch coverage achieved'
  },
];


const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';

  if (questionData.image) {
    const imageElement = document.createElement('img');
    imageElement.src = questionData.image;
    imageElement.alt = 'Question Image';
    questionElement.appendChild(imageElement);
  }

  questionElement.innerHTML += questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}
