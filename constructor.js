let library = []; // empty array to store book objects in

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
} // this is my constructor function for the creation of books

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}; // this attaches the info method to the prototype of the book constructor and makes it accesible to all future instances of this object.

const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  394,
  true
);

const meditations = new Book("Meditations", "Marcus Arelius", 256, false);

const ego = new Book("Ego is the Enemy", "Ryan Holiday", 264, true);

const nineteenEightyFour = new Book("1984", "George Orwell", 376, true);

function addBookToLibrary(book) {
  library.push(book);
} // adds a book to the library array

addBookToLibrary(thinkAndGrowRich);
addBookToLibrary(meditations);
addBookToLibrary(ego);
addBookToLibrary(nineteenEightyFour);

const cardContainer = document.querySelector(".card-container"); // creating variable for card container to append child elements to

function displayBooks() {
  library.forEach((book) => {
    const card = document.createElement("div"); // creates a div element that will represent the cards that book information will be displayed on
    cardContainer.appendChild(card); // this appends the card to the card-container div so that the cards will be displayed
    const title = document.createElement("p"); // this creates a p element for which the title will be displayed
    title.innerHTML = `Book Title: ${book.title}`; // this sets the paragraph content to the current object's title property value
    card.appendChild(title); // this appends that value to the card
    const author = document.createElement("p");
    author.innerHTML = `Author: ${book.author}`;
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.innerHTML = `Number of pages: ${book.pages}`;
    card.appendChild(pages);
    const read = document.createElement("p");
    read.innerHTML = book.read;
    card.appendChild(read);
    card.classList.add("card"); // adding the card class to the card elements
  });
  // utilize this function to loop through library array and display the values as cards in html elements
}

displayBooks();
