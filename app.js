

// an array which stores the correct answers
const correctAnswers = ['B', 'B', 'B', 'B'];
// select the .quiz-form class and set it to (const) form
const form = document.querySelector('.quiz-form');
// select the .result class and set it to (const) result
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  // prevent the page from refreshing
  e.preventDefault();
  // initialize score
  let score = 0;
  // an array which stores the users answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the value and index of each user answer against the value and index of each correct answer, if they are the same, add points to the score
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show the result on the page
  result.querySelector('span').textContent = `${score}%`; 
  result.classList.remove('d-none');
});