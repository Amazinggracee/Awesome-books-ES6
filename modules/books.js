import Book from './book.js';
import * as bookElements from './bookElements.js';

class Books {
  constructor() {
    this.books = [];
  }

  // retrieve from local storage

  retrieve = () => {
    const retrievedBooks = JSON.parse(localStorage.getItem('books'));
    if (retrievedBooks === null) {
      return;
    }
    retrievedBooks.forEach((book) => {
      this.books.push(book);
    });
  };

  createBookList() {
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.className = 'book-item';
      li.innerHTML = `
      <div class="author-title">
        <q class="new-title">${book.title}</q>
        <span>by</span>
        <p class="new-author">${book.author}</p>
      </div>
        <button class="remove-btn" id="${index}" type="button">Remove</button>
      `;
      bookElements.booksContainer.appendChild(li);
    });
  }

  initInput = () => {
    bookElements.newTitle.value = '';
    bookElements.newAuthor.value = '';
  };

  add() {
    const newBook = new Book(bookElements.newTitle.value, bookElements.newAuthor.value);
    this.books.push(newBook);

    localStorage.setItem('books', JSON.stringify(this.books));

    bookElements.booksContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.className = 'book-item';
      li.innerHTML = ` 
      <div class="author-title">
        <q class="new-title">${book.title}</q>
        <span>by</span>
        <p class="new-author">${book.author}</p>
      </div>
        <button class="remove-btn" id="${index}" type="button">Remove</button>
      `;
      bookElements.booksContainer.appendChild(li);
    });
    this.initInput();
  }

  remove(target) {
    if (target.className === 'remove-btn') {
      this.books.splice(target.id, 1);
      target.parentElement.remove();
      localStorage.setItem('books', JSON.stringify(this.books));
      this.initInput();
    }
  }
}

const bookList = new Books();
export default bookList;
