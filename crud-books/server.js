const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const bookRouter = require('./api/books');
app.set('view engine', 'ejs');
app.use(jsonParser);



app.get('/', (req, res) => {
    res.send('Books App!')
});


app.use((err, req, res, next) => {
    res
      .status(500)
      .send(`Something broke: ${err.message}`)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/books', bookRouter);

app.listen(2077, () => {
    console.log(`Server is running on 2077 port`)
});