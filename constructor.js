function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  394,
  "Did read"
);

console.log(thinkAndGrowRich.info());
