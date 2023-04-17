const titleBook = document.getElementById("title");
const authorBook = document.getElementById("author");
const pagesBook = document.getElementById("pages");
const genreBook = document.getElementById("genre");
const checkReadBook = document.getElementById("check-read");
const buttonSubmit = document.querySelector(".btn-submit");
const buttonAddCard = document.querySelector(".add-big-card");
const miniButtonAddCard = document.querySelector(".add-logo-up");
const popUp = document.querySelector(".pop-up");
const parentCards = document.querySelector(".container");
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

class Book {
  constructor(title, author, pages, genre, statusRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.statusRead = statusRead;
  }
}

function addBookToLibrary(event) {
  let title = titleBook.value;
  let author = authorBook.value;
  let pages = pagesBook.value;
  let genre = genreBook.value;
  let statusRead = checkReadBook.checked;

  let newBook = new Book(title, author, pages, genre, statusRead);
  myLibrary.push(newBook);

  popUp.style.display = "none";
  titleBook.value = null;
  authorBook.value = null;
  pagesBook.value = null;
  genreBook.value = null;
  checkReadBook.value = null;

  setStyleCardLibrary(title, author, pages, genre, statusRead);
  event.preventDefault();
}

function addCard(event) {
  popUp.style.display = "flex";
  event.stopPropagation();
}

function setStyleCardLibrary(title, author, pages, genre, statusRead) {
  const newCard = document.createElement("div");
  parentCards.insertBefore(newCard, parentCards.firstChild);
  newCard.classList.add("card");
  newCard.classList.add("card-library");

  const titleCard = document.createElement("div");
  newCard.appendChild(titleCard);
  titleCard.textContent = "Title: " + title;

  const authorCard = document.createElement("div");
  newCard.appendChild(authorCard);
  authorCard.textContent = "Author: " + author;

  const pagesCard = document.createElement("div");
  newCard.appendChild(pagesCard);
  pagesCard.textContent = "Pages: " + pages;

  const genreCard = document.createElement("div");
  newCard.appendChild(genreCard);
  genreCard.textContent = "Genre: " + genre;

  const statusReadCard = document.createElement("button");
  newCard.appendChild(statusReadCard);
  if (statusRead === true) {
    statusReadCard.textContent = "Done";
    statusReadCard.style.backgroundColor = "#56d46b";
  } else {
    statusReadCard.textContent = "Not read";
    statusReadCard.style.backgroundColor = "#dd3a25";
  }
  statusReadCard.classList.add("btnReadCard");

  const buttonDelete = document.createElement("button");
  newCard.appendChild(buttonDelete);
  buttonDelete.textContent = "Delete";
  buttonDelete.classList.add("btnDeleteCard");

  const buttonStatusReadAll = document.querySelectorAll(".btnReadCard");
  buttonStatusReadAll.forEach(function () {
    statusReadCard.addEventListener("click", () => {
      if (statusRead === true) {
        statusReadCard.textContent = "Not read";
        statusReadCard.style.backgroundColor = "#dd3a25";
      } else {
        statusReadCard.textContent = "Done";
        statusReadCard.style.backgroundColor = "#56d46b";
      }
    });
  });

  const buttonDeleteAll = document.querySelectorAll(".btnDeleteCard");
  buttonDeleteAll.forEach(function () {
    buttonDelete.addEventListener("click", () => newCard.remove());
  });
}
