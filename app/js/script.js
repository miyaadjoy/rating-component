"use script";

const ratingNumbers = document.querySelectorAll(".rating-number");
let rating;

ratingNumbers.forEach((ratings, i) => {
  ratings.addEventListener("click", () => {
    rating = ratings.id;
    ratings.style.backgroundColor = "#7c8798";
    ratings.style.color = "#fff";
    ratingNumbers.forEach((r, j) => {
      if (i !== j) {
        r.style.backgroundColor = "#252d37";
        r.style.color = "#959eac";
      }
    });
  });
});

document.querySelector(".rating__submit-btn").addEventListener("click", () => {
  console.log(rating);

  if (rating) {
    document.querySelector(".thank-you").classList.remove("hide");
    document.querySelector(".rating").classList.add("hide");
    document.querySelector(".selected-rating").textContent = rating;
  }
});
