class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

function create(param) {
  const td = document.createElement('td');
  td.innerText = param;
  return td;
}
let books;
function addbook(book) {
  const td = document.getElementById('books');
  const row = document.createElement('tr');
  row.appendChild(create(book.title));
  row.appendChild(create(book.author));
  row.appendChild(create(book.price));
  td.appendChild(row);
}
// eslint-disable-next-line no-unused-vars
function getbooks() {
  if (localStorage.getItem('books') === null) {
    books = [new Book('javascript', 'Ghosh', 10), new Book('css', 'Ghosh', 10), new Book('html', 'Ghosh', 10)];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  books.forEach(book => {
    addbook(book);
  });
}

// eslint-disable-next-line no-unused-vars
function add(title, author, price) {
  books.push(new Book(title, author, price));
  localStorage.setItem('books', JSON.stringify(books));
  addbook(new Book(title, author, price));
  document.getElementById('closebtn').click(true);
}