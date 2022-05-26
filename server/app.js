const config = require('./config/config');
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 4000;

const registrationRouter = require('./routes/authorizationRoutes/registration.route')

config(app);
app.use('/registration', registrationRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});