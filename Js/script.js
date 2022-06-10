const ratingButtons = document.querySelectorAll('.rating-btns');

const handleClick = () => {
  console.log('ye');
};

ratingButtons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
