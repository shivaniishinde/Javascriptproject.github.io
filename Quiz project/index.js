const quizDB = [
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello to my Land",
        b:"Hey text markup language",
        c:"HyperText makeup language",
        d:"Hypertext Markup Lanuage",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of css?",
        a:"Cascading Style sheets",
        b:"Cascading Style sheep",
        c:"Cartoon style sheet",
        d:"Cascading super sheet",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer product",
        b:"Hypertext Test protocol",
        c:"Hey trnsoer  language",
        d:"Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4: What is the full form of js?",
        a:"javascript",
        b:"javasuper",
        c:"justscript",
        d:"jordern shows",
        ans:"ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];

     question.innerText = questionList.question;

     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;

}

loadQuestion();

 const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }

    });

    return answer;

 };

 const deselectAll = () =>{
answers.forEach((curAnsElem) => curAnsElem.checked = false);
 }

submit.addEventListener('click', ()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


     if(checkedAnswer == quizDB[questionCount].ans){
    score++;
      };

      questionCount++;

      deselectAll();

      if(questionCount < quizDB.length){
        loadQuestion();
      }else{
          showScore.innerHTML = <><h3> You scored ${score}/${quizDB.length}</h3><button class="btn" onclick="location.reload()"> </button></>;
          
          showScore.classList.remove('scoreArea');
          
      }

});