const { Router } = require('express');
const fs = require('fs');
const bookValidator = require('./middlewares/book-validator');

const booksRouter = Router();

let books = JSON.parse(fs.readFileSync(`${__dirname}/db/books.json`));;

booksRouter.get('/', (req, res) => {
    res.send(books);
});

booksRouter.post('/', (req, res) => {
    const newBook = {
        author: req.body.author,
        title: req.body.title,
        category: req.body.category,
        text: req.body.text
    };
    const isBookExists = books.some(book => book.title === newBook.title);
    if (isBookExists) {
        return res.status(400).send({ success: false, message: 'Book already in list!' })
    }
    newBook.id = Date.now() + Math.random()*99;
    books.push(newBook);
    fs.writeFileSync(`${__dirname}/db/books.json`, JSON.stringify(books));
    res.status(201).send({ success: true });
});

booksRouter.get('/:id', (req, res) => {
    const bookId = +req.params.id;
    const book = books.find(book => book.id === bookId);
    if (!book) {
      res.status(404).send({ error: 'Book not found!' });
      return;
    }
    res.send(book);
});

booksRouter.put('/:id', bookValidator, (req, res) => {
    const bookId = +req.params.id;
    const updatedArray = books.map(b => {
        if (b.id === bookId) {
          return Object.assign({}, b, req.body)
        }
        return b;
    });
    books = updatedArray.slice();
    fs.writeFileSync(`${__dirname}/db/books.json`, JSON.stringify(books));
    res.status(200).send(`Book ${bookId} updated`)
});

booksRouter.delete('/:id', (req, res) => {
    const bookId = +req.params.id;
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).send({
        error: 'Book not found'
      })
    }
    books.splice(bookIndex, 1);
    fs.writeFileSync(`${__dirname}/db/books.json`, JSON.stringify(books));
    res.send(`Book ${bookId} has been deleted`);
});
  
module.exports = booksRouter;