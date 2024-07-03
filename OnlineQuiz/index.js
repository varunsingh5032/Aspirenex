// index.js
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City"
    },
    {
      question: "What is the largest living species of lizard?",
      options: ["Komodo dragon", "Saltwater crocodile", "Black mamba", "Green anaconda"],
      answer: "Komodo dragon"
    },
    {
      question: "What is the highest mountain peak in the solar system?",
      options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Denali"],
      answer: "Olympus Mons"
    },
    {
      question: "What is the deepest part of the ocean?",
      options: ["Mariana Trench", "Challenger Deep", "Tonga Trench", "Kermadec Trench"],
      answer: "Challenger Deep"
    },
    {
      question: "What is the longest river in South America?",
      options: ["Amazon River", " Paraná River", "São Francisco River", "Magdalena River"],
      answer: "Amazon River"
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara Desert", "Gobi Desert", "Mojave Desert", "Atacama Desert"],
      answer: "Sahara Desert"
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Blue whale", "Fin whale", "Humpback whale", "Gray whale"],
      answer: "Blue whale"
    },
    {
      question: "What is the fastest land animal?",
      options: ["Cheetah", "Pronghorn", " Thomson's gazelle", "Springbok"],
      answer: "Cheetah"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById("question").innerText = question.question;
    document.getElementById("options").innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      document.getElementById("options").appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
    if (selectedButton.innerText === answer) {
      score++;
    }
    currentQuestion++;
    showQuestion();
}