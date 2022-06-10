const ratingButtons = document.querySelectorAll('.rating-btns');

const handleClick = (e) => {
  console.log(e.target.value);
};

ratingButtons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
