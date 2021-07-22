const quizdata =[{
    question:"What does HTML stand for?",
    one:"Hyperlinks and Text Markup Language",
    two:"Hyper Text Markup Language",
    three:"Home Tool Markup Language",
    four:"Hyper Text Mark Language",
    ans:"two",

},
{
    question:"Choose the correct HTML tag for the largest heading",
    one:"heading",
    two:"h6",
    three:"head",
    four:"h1",
    ans:"four",

},
{
    question:"How can you make a numbered list?",
    one:"ol",
    two:"ul",
    three:"li",
    four:"dl",
    ans:"one",

},
{
    question:"What does CSS stand for?",
    one:"Creative Style Sheets",
    two:"Cascading Style Sheets",
    three:"Computer Style Sheets",
    four:"Colorful Style Sheets",
    ans:"two",

},
{
    question:"Inside which HTML element do we put the JavaScript?",
    one:"javascript",
    two:"js",
    three:"script",
    four:"scr",
    ans:"three",

},
]
console.log(quizdata);  
const question = document.querySelector(".question");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const sub = document.querySelector("#sub");

const answers = document.querySelectorAll(`.answer`);

const markscore = document.querySelector(`#markscore`);

let questionNo =0   ;
let score =0;

const loadQuestion =()=>{
// console.log(quizdata[0]);
// console.log(question);
 const questionList = quizdata[questionNo];

question.innerHTML=questionList.question;
a.innerHTML=questionList.one;
b.innerHTML=questionList.two;
c.innerHTML=questionList.three;
d.innerHTML=questionList.four;

// question.innerHTML= quizdata[0].question;

}
loadQuestion();
 const getcheckAnswer=()=>{
     let answer;
 
  answers.forEach((currAnselement)=>{
      if(currAnselement.checked){
          answer = currAnselement.id;
      }
    
  });
  return answer;
}


sub.addEventListener(`click`,()=>{
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizdata[questionNo].ans)
    {
        score++;
    };
    questionNo++;
    if(questionNo<quizdata.length){
        loadQuestion();
    }
    else{
        markscore.innerHTML=`<h3>Marks ${score},${quizdata.length}</h3>
        <button class="btn" onclick="location reload()"> </button>`; 

        markscore.classList.remove('mark');

    }
})
