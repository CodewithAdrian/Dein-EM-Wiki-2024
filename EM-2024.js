document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    // Menü standardmäßig verstecken
    navMenu.style.display = 'none';
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      // Menü ein- oder ausblenden
      if (navMenu.classList.contains('open')) {
        navMenu.style.display = 'flex';
      } else {
        navMenu.style.display = 'none';
      }
    });
  });

// Die Daten der EM 
var countDownDate1 = new Date("Jun 14, 2024 21:00:00").getTime();
var countDownDate2 = new Date("Jun 19, 2024 18:00:00").getTime();

// Update das Datum jede sekunde
var countdownfunction = setInterval(function() {

  // Die Zeit und das Datum von jetzt
  var now = new Date().getTime();

  // Rechne die restliche Zeit von dem heutigen Datum bis zum Spiel ab
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;

  // Zeitrechnung design
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Füge die restliche Zeit bei HTML ein :) 
  document.getElementById("countdown1").innerHTML = days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";

  document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
}, 1000);

let quiz = [
  {
      question: "Wer ist der Trainer der deutschen Nationalmannschaft vor der EM 2024?",
      options: ["Joachim Löw", "Hansi Flick", "Jürgen Klopp", "Thomas Tuchel"],
      answer: 1
  },
  {
      question: "In welchem Land findet die EM 2024 statt?",
      options: ["Deutschland", "Frankreich", "Spanien", "Italien"],
      answer: 0
  },
  {
      question: "Wer ist der Kapitän der deutschen Nationalmannschaft vor der EM 2024?",
      options: ["Manuel Neuer", "Toni Kroos", "Thomas Müller", "Joshua Kimmich"],
      answer: 0
  },
  {
      question: "Wie viele Mannschaften nehmen an der EM 2024 teil?",
      options: ["20", "24", "28", "32"],
      answer: 1
  },
  {
      question: "Wer hat die letzte EM (2020) gewonnen?",
      options: ["Portugal", "Frankreich", "Italien", "England"],
      answer: 2
  },
  
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  let questionDiv = document.getElementById('quiz');
  questionDiv.innerHTML = '';

  let questionTitle = document.createElement('h2');
  questionTitle.textContent = quiz[currentQuestion].question;
  questionDiv.appendChild(questionTitle);

  let optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  quiz[currentQuestion].options.forEach(function(option, i) {
      let optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.onclick = function() {
          if(i === quiz[currentQuestion].answer) {
              score++;
              alert('Richtig!');
          } else {
              alert('Falsch! Die richtige Antwort war: ' + quiz[currentQuestion].options[quiz[currentQuestion].answer]);
          }
          nextQuestion();
      };
      optionsDiv.appendChild(optionButton);
  });
  questionDiv.appendChild(optionsDiv);
}

function nextQuestion() {
  currentQuestion++;
  if(currentQuestion < quiz.length) {
      showQuestion();
  } else {
      document.getElementById('result').textContent = 'Sie haben ' + score + ' von ' + quiz.length + ' Fragen richtig beantwortet!';
  }
}

function lastQuestion() {
  currentQuestion--;
  if(currentQuestion < quiz.length) {
      showQuestion();
  } else {
    document.getElementById('result').textContent = 'Sie haben ' + score + ' von ' + quiz.length + ' Fragen richtig beantwortet!';
}
}


showQuestion();