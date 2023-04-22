const library = []; // empty array to store book objects in

let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookRead = document.querySelector("#read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
} // this is my constructor function for the creation of books

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}; // this attaches the info method to the prototype of the book constructor and makes it accesible to all future instances of this object.

function addBookToLibrary(book) {
  library.push(book);
} // adds a book to the library array

const cardContainer = document.querySelector(".card-container"); // creating variable for card container to append child elements to

function displayBooks() {
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.value
  ); // creating a new book object with the input from input fields

  addBookToLibrary(book);
  // adding the new object into the library array

  library.forEach((b) => {
    const card = document.createElement("div"); // creates a div element that will represent the cards that book information will be displayed on
    const title = document.createElement("p"); // this creates a p element for which the title will be displayed
    title.innerHTML = `Book Title: ${b.title}`; // this sets the paragraph content to the current object's title property value
    const author = document.createElement("p");
    author.innerHTML = `Author: ${b.author}`;
    const pages = document.createElement("p");
    pages.innerHTML = `Number of pages: ${b.pages}`;
    const read = document.createElement("p");
    read.innerHTML = b.read;
    /* this section above is creating DOM elements that are going to be populated with the input from the input fields */

    cardContainer.appendChild(card); // this appends the card to the card-container div so that the cards will be displayed
    card.appendChild(title); // this appends that value to the card
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.classList.add("card"); // adding the card class to the card elements

    /* the section above is appending those elements */
  });

  // utilize this function to loop through library array and display the values as cards in html elements
}

let submit = document.querySelector("#submit-btn");

submit.addEventListener("click", displayBooks);
