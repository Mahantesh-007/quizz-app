let questions = [
    { ques: "What is the capital of India?", ans: "Delhi", options: ["Bengaluru", "Delhi", "Hyderabad", "Chennai"] },
    { ques: "What is the largest mammal?", ans: "Blue Whale", options: ["Elephant", "Lion", "Blue Whale", "Giraffe"] },
    { ques: "Who wrote Romeo and Juliet?", ans: "William Shakespeare", options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Mark Twain"] },
    { ques: "What is the currency of Japan?", ans: "Japanese Yen", options: ["Chinese Yuan", "Indian Rupee", "Japanese Yen", "Euro"] },
    { ques: "What is the largest planet in our solar system?", ans: "Jupiter", options: ["Mars", "Venus", "Jupiter", "Saturn"] }
  ];

let score = 0;
let questionIndex = 0;
let question = document.getElementById("question")
let options = document.querySelectorAll(".btn")
let totalScore = document.getElementsByClassName("score");

function answerCheck(clickedAns) {
  const correctAns = questions[questionIndex].ans;

  if (clickedAns === correctAns) {
    score++;
    console.log("Correct!");
  } else {
    console.log("Incorrect");
  }
  console.log(clickedAns);

  totalScore[0].innerHTML = "Score:"+score;

  
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    displayQuestion();
  } else {
    
    console.log("Quiz complete. Your score: " + score);
  }
}

function displayQuestion() {
  question.innerHTML = questions[questionIndex].ques;
  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = questions[questionIndex].options[i];
  }

}
options.forEach(option => {
  option.addEventListener("click", function() {
    answerCheck(option.innerHTML); 
  });
});

function IncrementQuestion(value){
  questionIndex+=value;
  if(questionIndex < questions.length && questionIndex >=0){
    question.innerHTML = questions[questionIndex].ques;
    displayQuestion()
  }
  else{
    questionIndex-=value;

  }
}

displayQuestion();
