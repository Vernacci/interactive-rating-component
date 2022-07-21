const ratingButtons = document.querySelectorAll('.rating-btns button');
const submitBtn = document.querySelector('.submit-btn');
const text = document.querySelector('.text');
const containerStart = document.querySelector('.container-start');
const ratingStart = document.querySelector('.rating-start');
const containerEnd = document.querySelector('.container-end');
const ratingEnd = document.querySelector('.rating-end');

let rating;

ratingButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    rating = `You selected ${e.target.value} out of 5`;
  });
});

const handleSubmit = () => {
  containerStart.classList.add('hide');
  ratingStart.classList.add('hide');
  containerEnd.classList.remove('hide');
  ratingEnd.classList.remove('hide');
  text.innerText = rating;
};
