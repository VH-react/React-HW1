const Router = require('express').Router;
const db = require('./db/books');
console.log(db)

const booksRouter = Router();

let books = [];

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
    newBook.id = Date.now();
    const isBookExists = books.some(book => book.title === newBook.title);
    if (isBookExists) {
        return res.status(400).send({ success: false, message: 'Book already in list!' })
    }
    books.push(newBook);
    res.send({ success: true })
});

booksRouter.put('/:id', (req, res) => {
    const bookId = +req.params.id;
    let count = 0;
    const updatedArray = books.map(b => {
        if (b.id === bookId) {
          count++;
          return Object.assign({}, b, req.body)
        }
        return b;
    });
    books = updatedArray.slice();
    res.send(`Book ${bookId} updated`)
});

booksRouter.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedArray = books.filter(b => b.id !== +bookId);
    const deletedCount = books.length - updatedArray.length;
    books = updatedArray.slice();
    res.send({ deletedCount })
});
  
module.exports = booksRouter;