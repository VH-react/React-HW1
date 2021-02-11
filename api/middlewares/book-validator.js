module.exports = (req, res, next) => {
    const book = req.body;
    if (book.title && book.author && book.category) {
      return next();
    }
    res.status(400).send({
      error: 'Missing required arguments'
    })
};