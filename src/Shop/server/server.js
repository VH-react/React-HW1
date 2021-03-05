const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

// API routers
const userRouter = require('./api/users');
const authRouter = require('./api/auth');

const API_PORT = 3001;

const jsonParser = bodyParser.json();
const app = express();

app.use(session({
  name : 'app.sid',
  secret: "1234567890QWERTY",
  resave: true,
  saveUninitialized: true
}));

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('Hello User!')
});

app.get('/echo', (req, res) => {
  const text = req.query.q;
  res.send(text)
});

let count = 0;

app.get('/count', (req, res) => {
  res.send(`Page views: ${++count}`)
});

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(API_PORT, () => {
  console.log(`Server is running on ${API_PORT} port`)
});
