const config = require('./config/config');
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 4000;

const registrationRouter = require('./routes/authorizationRoutes/registration.route');
const loginRouter = require('./routes/authorizationRoutes/login.route');
const logoutRouter = require('./routes/authorizationRoutes/logout.route');
const sessionRouter = require('./routes/authorizationRoutes/check.session.route')

config(app);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/', sessionRouter)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});