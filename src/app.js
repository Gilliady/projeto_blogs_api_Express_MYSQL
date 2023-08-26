const express = require('express');
const { loginValidation } = require('./middlewares');
const { login } = require('./controller/login.controller');
const { userRouter } = require('./routes');

const app = express();

app.use(express.json());
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginValidation, login);
app.use('/user', userRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
