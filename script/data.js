class Book {
  constructor(title, author, price, status) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.status = status;
  }
}

function create(param) {
  const td = document.createElement('td');
  td.innerText = param;
  return td;
}
let books;
function btnclicked(btn, tbook) {
  if (btn.innerText === 'Read') {
    btn.innerText = 'unread';
  } else {
    btn.innerText = 'Read';
  }
  books.forEach(book => {
    if (book === tbook) {
      book.status = btn.innerText;
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}
function createbutton(book) {
  const btn = document.createElement('button');
  btn.innerText = book.status;
  btn.className = 'btn btn-primary m-2';
  btn.onclick = () => btnclicked(btn, book);
  return btn;
}
function addbook(book) {
  const td = document.getElementById('books');
  const row = document.createElement('tr');
  row.appendChild(create(book.title));
  row.appendChild(create(book.author));
  row.appendChild(create(book.price));


  row.appendChild(createbutton(book));
  td.appendChild(row);
}
// eslint-disable-next-line no-unused-vars
function getbooks() {
  if (localStorage.getItem('books') === null) {
    books = [new Book('javascript', 'Ghosh', 10, 'Read'), new Book('css', 'Ghosh', 10, 'Read'), new Book('html', 'Ghosh', 10, 'Read')];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  books.forEach(book => {
    addbook(book);
  });
}

// eslint-disable-next-line no-unused-vars
function add(title, author, price) {
  books.push(new Book(title, author, price, 'Read'));
  localStorage.setItem('books', JSON.stringify(books));
  addbook(new Book(title, author, price, 'Read'));
}