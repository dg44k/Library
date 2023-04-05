const titleBook = document.getElementById("title");
const authorBook = document.getElementById("author");
const pagesBook = document.getElementById("pages");
const genreBook = document.getElementById("genre");
const checkReadBook = document.getElementById("check-read");
const buttonSubmit = document.querySelector(".btn-submit");
const buttonAddCard = document.querySelector(".add-big-card");
const miniButtonAddCard = document.querySelector(".add-logo-up");
const popUp = document.querySelector(".pop-up");
const parentCards = document.querySelector(".container")
let myLibrary = [];

miniButtonAddCard.addEventListener("click", addCard);
buttonSubmit.addEventListener("click", addBookToLibrary);
buttonAddCard.addEventListener("click", addCard);
popUp.addEventListener("mousedown", (event) => {
  event.stopPropagation();
});
document.addEventListener("mousedown", (event) => {
  if (event.currentTarget != popUp) {
    popUp.style.display = "none";
  }
});

function Book(title, author, pages, genre, statusRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.statusRead = statusRead;
}

function addBookToLibrary(event) {
  let title = titleBook.value;
  let author = authorBook.value;
  let pages = pagesBook.value;
  let genre = genreBook.value;
  let statusRead = checkReadBook.value;

  let newBook = new Book(title, author, pages, genre, statusRead);
  myLibrary.push(newBook);

  popUp.style.display = "none";
  titleBook.value = null;
  authorBook.value = null;
  pagesBook.value = null;
  genreBook.value = null;
  checkReadBook.value = null;

  let newCard = document.createElement("div");
  parentCards.insertBefore(newCard, parentCards.firstChild);
  newCard.classList.add('card');
  newCard.classList.add("card-library");
  
  event.preventDefault();
}

function addCard(event) {
    popUp.style.display = "flex";
    event.stopPropagation();
}
function setStyleCardLibrary(){
  
}
