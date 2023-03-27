import Book from './modules/book.js';
import dateAndTime from './modules/date.js';

const form = document.querySelector('.form');

dateAndTime();

document.addEventListener('DOMContentLoaded', Book.displayBooks);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('.input-author').value;
  const title = document.querySelector('.input-book').value;
  const error = document.querySelector('.error-message');
  if (author === '' || title === '') {
    error.style.display = 'block';
  }
  const book = new Book(title, author);
  Book.addBookToList(book);
  Book.addBook(book);
  Book.clearFields();
});

const logo = document.querySelector('#logo');
const list = document.querySelector('#list');
const newbook = document.querySelector('#newbook');
const contact = document.querySelector('#contact');
const display = document.querySelector('#display');
const contactPage = document.querySelector('#contactPage');
logo.addEventListener('click', () => {
  list.style.color = 'blue';
  contact.style.color = 'black';
  newbook.style.color = 'black';
  display.style.display = 'block';
  form.style.display = 'none';
  contactPage.style.display = 'none';
});
list.addEventListener('click', () => {
  list.style.color = 'blue';
  contact.style.color = 'black';
  newbook.style.color = 'black';
  display.style.display = 'block';
  form.style.display = 'none';
  contactPage.style.display = 'none';
});

newbook.addEventListener('click', () => {
  list.style.color = 'black';
  contact.style.color = 'black';
  newbook.style.color = 'blue';
  form.style.display = 'flex';
  display.style.display = 'none';
  contactPage.style.display = 'none';
});
contact.addEventListener('click', () => {
  list.style.color = 'black';
  contact.style.color = 'blue';
  newbook.style.color = 'black';
  contactPage.style.display = 'block';
  form.style.display = 'none';
  display.style.display = 'none';
});
