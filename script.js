    const quizData = [
  {
    question : '1 Select ONE option.',
    image: 'images/Question1.png',
    options: [
        'To prove that there are no unfixed defects in the system under test', 
        'To prove that there will be no failures after the implementation of the system into production',
        ' To reduce the risk level of the test object and to build confidence in the quality level', 
        'To verify that there are no untested combinations of inputs'],
    answer: ' To reduce the risk level of the test object and to build confidence in the quality level',
  },
  {
    question: '2 Select ONE option',
    image: 'images/Question2.png',
    options: [
        'Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products', 
        'Testers try not to disturb the developers while coding, so that the developers write better code', 
        'Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing', 
        'Certified testers will design much better test cases than non-certified testers'],
    answer: 'Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products',
  },
  {
    question: '3 Select ONE option',
    image: 'images/Question3.png',
    options: [
        'Tests wear out', 
        'Absence-of-errors fallacy', 
        'Defects cluster together', 
        'Exhaustive testing is impossible'],
    answer: 'Tests wear out',
  },
  {
    question: '4 Select ONE option',
    image: 'images/Question4.png',
    options: [
        'Estimating that testing the integration with the payment service will take 8 person-days', 
        'Deciding that the team should test if it is possible to properly share payment between many users', 
        'Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid', 
        'Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect'],
    answer: 'Deciding that the team should test if it is possible to properly share payment between many users',
  },
  {
    question: '5 Select ONE option',
    image: 'images/Question5.png',
    options: [
      'i, ii have significant influence; iii, iv, v have not',
      'i, iii, iv have significant influence; ii, v have not',
      'ii, iv, v have significant influence; i, iii have not',
      'iii, v have significant influence; i, ii, iv have not',
    ],
    answer: 'i, iii, iv have significant influence; ii, v have not',
  },
  {
    question: '6 Select ONE options',
    image: 'images/Question6.png',
    options:[
      'Configure test environments / Report on achieved coverage', 
      'Maintain the product backlog', 
      'Design solutions to new requirements', 
      'Create the test plan',
    ],
    answer: 
      'Configure test environments / Report on achieved coverage',
  },
  {
    question: '7 Select ONE option',
    image: 'images/Question7.png',
    options: [
      'ii and iv are important; i, iii and v are no',
      'i, iii and v are important; ii and iv are not',
      'i, ii and v are important; iii and iv are not',
      'iii and iv are important; i, ii and v are not',
    ],
    answer: 'i, iii and v are important; ii and iv are not',
  },
  {
    question: '8 Select ONE option',
    image: 'images/Question8.png',
    options: [
      'Business representatives decide on test automation approaches', 
      'Testers help business representatives to define test strategy', 
      'Business representatives are not part of the whole team approach', 
      'Testers help business representatives to create suitable acceptance tests'],
    answer: 'Testers help business representatives to create suitable acceptance tests',
  },
  {
    question: '9 Select ONE option',
    image: 'images/Question9.png',
    options:[
      'Only in sequential SDLC models',
      'Only in iterative SDLC models',
      'Only in iterative and incremental SDLC models',
      'In sequential, incremental, and iterative SDLC models',
    ],
    answer: 'In sequential, incremental, and iterative SDLC models',
  },
  {
    question: '10 Select ONE option',
    image: 'images/Question10.png',
    options: [
      'In ATDD, acceptance criteria are typically created based on the given/when/then format', 
      'In ATDD, test cases are mainly created at component testing and are code-oriented', 
      'In ATDD, tests are created, based on acceptance criteria to drive the development of the related software', 
      'in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them'],
    answer: 'In ATDD, tests are created, based on acceptance criteria to drive the development of the related software',
  },
  {
    question: '11 Select ONE option',
    image: 'images/Question11.png',
    options: [
      'Reviewing the user requirements before they are formally accepted by the stakeholders',
      'Writing a component test before the corresponding code is written',
      'Executing a performance efficiency test for a component during component testing',
      'Writing a test script before setting up the configuration management process'
    ],
    answer: 'Writing a test script before setting up the configuration management process',
  },
  {
    question: '12 Select ONE option',
    image: 'images/Question12.png',
    options: [
      'Retrospectives are very popular these days and clients would appreciate it if we added them to our processes',
      'Organizing retrospectives will save the organization money because end user representatives do not provide immediate feedback about the product',
      'Process weaknesses identified during the retrospective can be analyzed and serve as a to-do list for the organization’s continuous process improvement program',
      'Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization'
    ],
    answer: 'Process weaknesses identified during the retrospective can be analyzed and serve as a to-do list for the organization’s continuous process improvement program',
  },
  {
    question: '13 Select ONE option',
    image: 'images/Question13.png',
    options: [
      '1D, 2B, 3A, 4C',
      '1D, 2B, 3C, 4A',
      '1B, 2A, 3D, 4C',
      '1C, 2B, 3A, 4D'
    ],
    answer: '1D, 2B, 3A, 4C',
  },
  {
    question: '14 Select ONE option',
    image: 'images/Question14.png',
    options: [
      'Only 4, 7, 8, 9',
      'Only 5, 7',
      'Only 4, 6, 8, 9',
      'Only 5, 6'
    ],
    answer: 'Only 5, 7',
  },
  {
    question: '15 Select ONE option',
    image: 'images/Question15.png',
    options: [
      'Having less expensive defect management due to the ease of detecting defects later in the SDLC',
      'Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing',
      'Finding coding defects that might not have been found by only performing dynamic testing',
      'Detecting gaps and inconsistencies in requirements'
    ],
    answer: 'Having less expensive defect management due to the ease of detecting defects later in the SDLC',
  },
  {
    question: '16 Select ONE option',
    image: 'images/Question16.png',
    options: [
      'It improves the test process for future projects',
      'It forces customers to prioritize their requirements based on agreed risks',
      'It is the only way to measure the quality of changes',
      'It helps avoid requirements misunderstandings'
    ],
    answer: 'It helps avoid requirements misunderstandings',
  },
  {
    question: '17 Select ONE option',
    image: 'images/Question17.png',
    options: [
      'Informal review',
      'Walkthrough',
      'Technical review',
      'Inspection'
    ],
    answer: 'Walkthrough',
  },
  {
    question: '18 Select ONE option',
    image: 'images/Question18.png',
    options:[
      'Participants should dedicate adequate time for the review',
      'Splitting large work products into small parts to make the required effort less intense',
      'Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants',
      'Failures found should be acknowledged, appreciated, and handled objectively'
    ],
    answer: 'Failures found should be acknowledged, appreciated, and handled objectively',
  },
  {
    question: '19 Select ONE option',
    image: 'images/Question19.png',
    options: [
      'Test cases are created based on detailed design information',
      'Items tested within the interface code section are used to measure coverage',
      'The techniques heavily rely on the tester’s knowledge of the software and the business domain',
      'The test cases are used to identify deviations from the requirements'
    ],
    answer: 'The techniques heavily rely on the tester’s knowledge of the software and the business domain',
  },
  {
    question: '20 Select ONE option',
    image: 'images/Question20.png',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    answer: '4',
  },
  {
    question: '21 Select ONE option',
    image: 'images/Question21.png',
    options:[
      '50%',
      '60%',
      '33.3%',
      '100%'
    ],
    answer: '50%',
  },
  {
    question: '22 Select ONE option',
    image: 'images/Question22.png',
    options: [
      'R4',
      'R2',
      'R6',
      'R8'
    ],
    answer: 'R8',
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
