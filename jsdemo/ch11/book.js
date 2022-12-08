class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");

        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                       <td>${book.author}</td>
                       <td>${book.isbn}</td>
                       <td><a href="#" class='delete'>X</a></td>`;

        list.appendChild(row);
    }

    clearFormFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const constainer = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        constainer.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete')
            target.parentElement.parentElement.remove();
    }
}

let storage = window.localStorage
class Store {
    static getBooks() {
        let books;
        if (storage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(storage.getItem('books'));
        }
        return books;

    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => {
            const ui = new UI;
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        storage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        });
        storage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById('book-form').addEventListener('submit', e => {
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
        const book = new Book(title, author, isbn);
        Store.addBook(book);
        const ui = new UI();
        if (title === "" || author === "" || isbn === "") {
            ui.showAlert('Please populate fields', 'error');
        } else {
            ui.addBookToList(book);
            ui.showAlert('Your book has been added', 'success');
            ui.clearFormFields();
        }
        e.preventDefault();
    })

document.getElementById('book-list').addEventListener('click', e => {
        const ui = new UI();
        ui.deleteBook(e.target);
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert('Your book has been removed', 'success');
        e.preventDefault();
    })