const quizData =[

{
    question:'When was JavaScript invented ?',
    a: '1990',
    b: '1992',
    c: '1993',
    d: '1995',
    correct: 'd',
},{
   question:'when was html5 invented ?' ,
   a: '2008',
   b: '2005',
   c: '1993',
   d: '2007',
   correct: 'a',
},{
    question: 'when css released ?',
    a: '1998',
    b: ' 1996',
    c: '1997',
    d:'1999',
    correct:'b',
},{
    question: 'when jQuery released',
    a:'2004',
    b:'2005',
    c:'2006',
    d:'2007',
    correct:'c',

},{
question:'when bootstrap released ?',
    a: '2010',
    b: ' 2011',
    c: '2012',
    d: '2012 ',
    correct: 'b',
}
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEL= document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn=document.getElementById("submit");


let currentQuiz = 0;
let score =0;  
loadQuiz();

function loadQuiz(){
deselectAnswers();
const currentQuizData =quizData[currentQuiz];
questionEL.innerText=currentQuizData.question;
a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;

}

function getSelected() {
    let answer=undefined;

    answerEls.forEach((answerEl) =>{

if (answerEl.checked){
        answer=answerEl.id;

    }





});
return answer;

}

function deselectAnswers(){

answerEls.forEach((answerEl) =>{
    answerEl.checked=false;

});

}


submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer=getSelected();
    if(answer){
if(answer===quizData[currentQuiz].correct)
{
  score++;  
}

    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML=`<h2>You Answered correctly at ${score}/${quizData.length} question</h2>`;
        
    }
  
    }
});