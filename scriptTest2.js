const quizData = [
  {
    question: '1 Select ONE option',
    image: 'images/Question23.png',
    options: [
      "4",
      "2",
      "7",
      "3"
    ],
    answer: '3'
  },
  {
    question: '2 Select ONE option',
    image: 'images/Question24.png',
    options: [
      "Each instruction in the code that contains a defect has been executed at least once",
      "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
      "Each path in the code has been executed at least once",
      "Every combination of input values has been tested at least once"
    ],
    answer: 'Each instruction in the code that contains a defect has been executed at least once'
  },
  {
    question: '3 Select ONE option',
    image: 'images/Question25.png',
    options: [
      "During white-box testing the entire software implementation is considered",
      "White-box coverage metrics can help identify additional tests to increase code coverage",
      "White-box test techniques can be used in static testing",
      "White-box testing can help identify gaps in requirements implementation"
    ],
    answer: 'White-box testing can help identify gaps in requirements implementation'
  },
  {
    question: '4 Select ONE option',
    image: 'images/Question26.png',
    options: [
      "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
      "Error guessing involves using your personal experience of development and the errors you made as a developer",
      "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
      "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
    ],
    answer: 'Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers'
  },
  {
    question: '5 Select ONE option',
    image: 'images/Question27.png',
    options: [
      "Checklist-based testing",
      "Error guessing",
      "Exploratory testing",
      "Branch testing"
    ],
    answer: 'Exploratory testing'
  },
  {
    question: '6 Select ONE option',
    image: 'images/Question28.png',
    options: [
      "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
      "Using the given/when/then format to describe an example test condition related to a given user story",
      "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
      "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
    ],
    answer: 'Using the given/when/then format to describe an example test condition related to a given user story'
  },
  {
    question: '7 Select ONE option',
    image: 'images/Question29.png',
    options: [
      "test if the editor can save the document after deleting the page content",
      "test if the content owner can log in and make updates to the content",
      "test if the editor can schedule the edited content for publication",
      "test if the editor can reassign to another editor to make updates"
    ],
    answer: 'test if the editor can save the document after deleting the page content'
  },
  {
    question: '8 Select ONE option',
    image: 'images/Question30.png',
    options: [
      "Testers determine the priority of the user stories to be developed",
      "Testers focus only on the functional aspects of the system to be tested",
      "Testers participate in the detailed risk identification and risk assessment of user stories",
      "Testers guarantee the release of high-quality software through early test design during the release planning"
    ],
    answer: 'Testers participate in the detailed risk identification and risk assessment of user stories'
  },
  {
    question: '9 Select ONE option',
    image: 'images/Question31.png',
    options: [
      "Test environment readiness",
      "The ability to log in to the test object by the tester",
      "Estimated defect density is reached / Regression tests are automated",
      "Requirements are translated into given/when/then format",
    ],
    answer: 
    'Estimated defect density is reached / Regression tests are automated'
  },
  {
    question: '10 Select ONE option',
    image: 'images/Question32.png',
    options: [
      "9 person-hours",
      "14 person-hours",
      "11 person-hours",
      "10 person-hours"
    ],
    answer: '10 person-hours'
  },
  {
    question: '11 Select ONE option',
    image: 'images/Question33.png',
    options: [
      "TC 003",
      "TC 005",
      "TC 002",
      "TC 001"
    ],
    answer: 'TC 003'
  },
  {
    question: '12 Select ONE option',
    image: 'images/Question34.png',
    options: [
      "1C, 2A, 3B, 4D",
      "1D, 2A, 3C, 4B",
      "1C, 2B, 3D, 4A",
      "1D, 2B, 3C, 4A"
    ],
    answer: '1C, 2A, 3B, 4D'
  },
  {
    question: '13 Select ONE option',
    image: 'images/Question35.png',
    options: [
      "Risk acceptance",
      "Contingency plan",
      "Risk mitigation",
      "Risk transfer"
    ],
    answer: 'Risk mitigation'
  },
  {
    question: '14 Select ONE option',
    image: 'images/Question36.png',
    options: [
      "Acceptance criteria",
      "Defect report",
      "Test completion report",
      "Burndown chart"
    ],
    answer: 'Burndown chart'
  },
  {
    question: '15 Select ONE option',
    image: 'images/Question37.png',
    options: [
      "Traceability management",
      "Maintenance testing",
      "Configuration management",
      "Requirements engineering"
    ],
    answer: 'Configuration management'
  },
  {
    question: '16 Select ONE option',
    image: 'images/Question38.png',
    options: [
      "Expected result and actual result",
      "References and defect status",
      "Test environment and test item",
      "Priority and severity"
    ],
    answer: 'Test environment and test item'
  },
  {
    question: '17 Select ONE option',
    image: 'images/Question39.png',
    options: [
      "Test monitoring and control",
      "Test analysis and design",
      "Test implementation and execution",
      "Test completion"
    ],
    answer: 'Test implementation and execution'
  },
  {
    question: '18 Select ONE option',
    image: 'images/Question40.png',
    options: [
      "It may introduce unknown regressions in production",
      "Sufficient efforts to maintain testware may not be properly allocated",
      "Testing tools and associated testware may not be sufficiently relied upon",
      "It may reduce the time allocated for manual testing"
    ],
    answer: 'Sufficient efforts to maintain testware may not be properly allocated'
  },
  {
    question: '19 Select ONE option',
    image: 'images/Question41.png',
    options: [
      "Debugging",
      "Software testing",
      "Requirement elicitation",
      "Defect management"
    ],
    answer: 'Debugging'
  },
  {
    question: '20 Select ONE option',
    image: 'images/Question42.png',
    options: [
      "It is correct. Testing and QA mean exactly the same thing",
      "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues",
      "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes",
      "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
    ],
    answer: 'It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects'
  },
  {
    question: '21 Select ONE option',
    image: 'images/Question43.png',
    options: [
      "The root cause",
      "A failure",
      "An error",
      "A defect"
    ],
    answer: 'A defect'
  },
  {
    question: '22 Select ONE option',
    image: 'images/Question44.png',
    options: [
      "Test planning",
      "Test monitoring and control",
      "Test analysis",
      "Test design"
    ],
    answer: 'Test design'
  }
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
