const ratingBox = document.querySelector('.main__rating-container');
const thanksBox = document.querySelector('.main__thankyou-state');
const submitButton = document.getElementById('submit');
const ratings = document.querySelectorAll('.rating-btn');
const actualRating = document.getElementById('rating-number');

submitButton.addEventListener('click', () => {
    ratingBox.classList.toggle('active')
    thanksBox.classList.toggle('active')

})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
