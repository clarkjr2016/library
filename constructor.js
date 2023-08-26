// select the form
const form = document.querySelector("form");

const inputs = form.querySelectorAll(
  'input[type ="text"], input[type ="number"]'
); // selects all the valuable inputs that need to be validated

// add the required property to all of the inputs
for (i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.setAttribute("required", "");
}

// on the submit button add event listeners to all of the inputs and if they aren't valid stop the format form submitting and provide an error messaage

const library = []; // empty array to store book objects in

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");

/* Assigning the form HTML elements to variables so that I can use them later */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
} // this is my constructor function for the creation of books

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}; // this attaches the info method to the prototype of the book constructor and makes it accesible to all future instances of this object.

Book.prototype.index = function () {
  const indexOfObject = library.indexOf(this);
  return indexOfObject;
}; // establishing a method for all books to return its index within the library array

Book.prototype.added = false;
// this is adding a property to the prototype of object Book so that I can tell if it has been added to the library array

function addBookToLibrary(book) {
  library.push(book);
} // adds a book to the library array

const cardContainer = document.querySelector(".card-container"); // creating variable for card container to append child elements to

let cards = ""; // setting up this variable here so that it can be in the global scope and be accessible both in and out of the display book function

function displayBooks() {
  for (i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (!input.checkValidity()) {
      return;
    }
  } // this for loop looks through all of the inputs and if any of them aren't valid it just returns.

  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.value
  ); // creating a new book object with the input from input fields

  addBookToLibrary(book);
  // adding the new object into the library array

  library.forEach((b) => {
    if (b.added === false) {
      const card = document.createElement("div"); // creates a div element that will represent the cards that book information will be displayed on
      const title = document.createElement("p"); // this creates a p element for which the title will be displayed
      title.innerHTML = `Book Title: ${b.title}`; // this sets the paragraph content to the current object's title property value
      const author = document.createElement("p");
      author.innerHTML = `Author: ${b.author}`;
      const pages = document.createElement("p");
      pages.innerHTML = `Number of pages: ${b.pages}`;
      const read = document.createElement("p");
      read.innerHTML = `Read or no: ${b.read}`;
      /* this section above is creating DOM elements that are going to be populated with the input from the input fields */

      cardContainer.appendChild(card); // this appends the card to the card-container div so that the cards will be displayed
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.classList.add("card"); // adding the card class to the card elements
      cards = cardContainer.querySelectorAll(".card"); // this ensures that all elements with cards are selected

      /* the section above is appending those elements to the card container element */

      const removeButton = document.createElement("button");
      card.appendChild(removeButton);
      removeButton.innerText = "remove";
      removeButton.classList.add("remove-button");
      /* this section is creating and appending the remove button on the cards */

      const readToggle = document.createElement("button");
      card.appendChild(readToggle);
      readToggle.innerText = "Read";

      readToggle.addEventListener("click", () => {
        if (read.innerHTML === `Read or no: Not Read`) {
          read.innerHTML = `Read or no: Read`;
        } else {
          read.innerHTML = "Read or no: Not Read";
        }
      });

      removeButton.addEventListener("click", () => {
        library.splice(b.index, 1); // this removes the object element from the array
        card.remove(); // this removes the card element from the display
      });

      b.added = true;
      clearAllInput();
    } else {
      return;
    } // I wrapped this function in an if statement so that it would assess if the book object has been already added to the library or not.
  });
}
// utilize this function to loop through library array and display the values as cards in html elements

const submit = document.querySelector("#submit-btn");

form.addEventListener("submit", function (e) {
  for (i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!input.checkValidity()) {
      e.preventDefault();
    }
  }
});

submit.addEventListener("click", displayBooks);

function clearAllInput() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.value = "";
}

function clearAll() {
  cards.forEach((c) => {
    c.remove();
  });
  clearAllInput();
} // function to clear out any existing cards and text input fields

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", clearAll);
