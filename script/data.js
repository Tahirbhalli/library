/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let books;
// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
function render() {
  ctablebody();
  if (localStorage.getItem('books') === null) {
    books = [new Book('javascript', 'Ghosh', 10, 'Read'), new Book('css', 'Ghosh', 10, 'Read'), new Book('html', 'Ghosh', 10, 'Read')];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  books.forEach(book => {
    addbook(book);
  });
}
function removed(tbook) {
  const newbooks = [];
  books.forEach(book => {
    if (book !== tbook) {
      newbooks.push(book);
    }
  });
  localStorage.setItem('books', JSON.stringify(newbooks));
  const b = document.getElementById('books');
  b.remove();
  render();
}


// eslint-disable-next-line no-unused-vars
function add() {
  books.push(new Book(this.title.value, this.author.value, this.price.value, 'Read'));
  localStorage.setItem('books', JSON.stringify(books));
  addbook(new Book(this.title.value, this.author.value, this.price.value, 'Read'));
  formValue();
}
