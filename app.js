let cardOne = document.querySelector(".card-one-container");
let cardTwo = document.querySelector(".card-two-container");
let submitButton = document.querySelector(".submit-button");
let rating = document.querySelector(".ratings-container");
let ratingSelected = 0;
let confirmationText = document.querySelector(".selection-container");

submitButton.addEventListener("click", function () {
  cardOne.style.display = "none";
  cardTwo.style.display = "flex";
  confirmationText.textContent = `You selected ${ratingSelected.toString()} out of 5 stars`;
});

rating.addEventListener("click", function (e) {
  if (ratingSelected == 0) {
    e.target.classList.add("rating-selected");
    ratingSelected = parseInt(e.target.children[0].innerHTML);
  } else {
    let currActive = document.querySelector(".rating-selected");
    currActive.classList.remove("rating-selected");
    e.target.classList.add("rating-selected");
    ratingSelected = parseInt(e.target.children[0].innerHTML);
  }
});
