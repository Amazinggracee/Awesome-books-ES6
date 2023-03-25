import * as bookElements from './bookElements.js';

bookElements.listBookLinks.forEach((listBookLink) => {
  listBookLink.addEventListener('click', () => {
    bookElements.listBooks.classList.remove('hidden');
    bookElements.addNewBook.classList.add('hidden');
    bookElements.contactInfo.classList.add('hidden');
  });
});

bookElements.newBookLink.addEventListener('click', () => {
  bookElements.addNewBook.classList.remove('hidden');
  bookElements.listBooks.classList.add('hidden');
  bookElements.contactInfo.classList.add('hidden');
});

bookElements.contactLink.addEventListener('click', () => {
  bookElements.contactInfo.classList.remove('hidden');
  bookElements.addNewBook.classList.add('hidden');
  bookElements.listBooks.classList.add('hidden');
});