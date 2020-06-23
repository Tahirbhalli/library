/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function addbook(book) {
  const td = document.getElementById('books');
  const row = document.createElement('tr');
  row.appendChild(create(book.title));
  row.appendChild(create(book.author));
  row.appendChild(create(book.price));
  row.appendChild(createbutton(book));
  row.appendChild(removebtn(book));
  td.appendChild(row);
}
function create(param = '') {
  const td = document.createElement('td');
  td.innerText = param;
  return td;
}

function removebtn(book) {
  const td = create();
  const btn = document.createElement('button');
  btn.innerText = 'remove';
  btn.className = 'btn btn-primary m-2';
  btn.onclick = () => removed(book);
  td.appendChild(btn);
  return td;
}
function createbutton(book) {
  const td = create();
  const btn = document.createElement('button');
  btn.innerText = book.status;
  btn.className = 'btn btn-primary m-2';
  btn.onclick = () => btnclicked(btn, book);
  td.appendChild(btn);
  return td;
}