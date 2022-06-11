const ratingButtons = document.querySelectorAll('.rating-btns button');
const submitBtn = document.querySelector('.submit-btn');

ratingButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let rating = `You selected ${e.target.value} out of 5`;
    console.log(rating);
    btn.classList.toggle('desativo');
    btn.classList.toggle('ativo');
  });
});
