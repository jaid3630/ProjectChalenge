 const Questions = [
	{
		'que': 'which of the following is a markup language?',
		'a': 'HTML',
		'b': 'CSS',
		'c': 'JAVASCRIPT',
		'd': 'PHP',
		'correct': 'a'
	},

	{
		'que': 'what year was javascript launched?',
		'a': '1996',
		'b': '1995',
		'c': '1994',
		'd': 'none of the  above',
		'correct': 'b'
	},
	{
		'que': 'what does css stands for?',
		'a': 'computer science system',
		'b': 'cascading style sheet',
		'c': 'composite system software',
		'd': 'cyber security system',
		'correct': 'b'
	},

 ];
let index = 0;
let total = Questions.length;
let right = 0,wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options');
 const  loadQuestion = () => {
  if(index === total){
	return endQuiz();
  }
	reset();
 const data = Questions[index];
queBox.innerHTML =`${index+1} ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;
  }
const SubmitQuiz = () =>{
	const data = Questions[index];
	const ans = getAnswer();
	if (ans === data.correct){
      right++;
	}
	else{
       wrong++;
	}
	index++;
	loadQuestion();
	return;
} 
const getAnswer = () => {
	let answer;
	optionInputs.forEach(
	    (input) =>{
             if(input.checked){
              answer = input.value;
			}
 		 }
	)
	return answer;
}
const reset =() =>{
	optionInputs.forEach(
		(input) =>{
			input.checked = false;
		}
	)
}
const endQuiz = () => {
	document.getElementById("box").innerHTML =`
	<div style="text-align:center;">
	<h3>Thank you for playing the Quiz</h3>
	<h2>${right} / ${total} are correct </h2>
	</div>`
     
}
  	loadQuestion();
