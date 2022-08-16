const express = require('express');
const config = require('./config/config');
const path = require('path');

const app = express();
const PORT = process.env.PORT ?? 3000;

const registrationRouter = require('./routes/authorizationRoutes/registration.route');
const loginRouter = require('./routes/authorizationRoutes/login.route');
const logoutRouter = require('./routes/authorizationRoutes/logout.route');
const sessionRouter = require('./routes/authorizationRoutes/check.session.route');
const updateProfileRouter = require('./routes/updateRoutes/update.profile.route');

const validateLawyerRouter = require('./routes/updateRoutes/validate.lawyer.route');
const chatRouter = require('./routes/chatRoutes/chat.route');

const admin = require('./routes/admin.routes');
const news = require('./routes/news.routes');

config(app);

app.use(express.static(path.join(__dirname, 'build')));

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.use('/', sessionRouter);
app.use('/add', require('./routes/support.routes'));
app.use('/add', require('./routes/anketa.routes'));
app.use('/accept', require('./routes/anketa.routes'));
app.use('/decline', require('./routes/anketa.routes'));
app.use('/', require('./routes/anketa.routes'));
app.use('/lawyer', require('./routes/anketa.routes'));

app.use('/getsession', sessionRouter);
app.use('/updateProfile', updateProfileRouter);

app.use('/validateLawyer', validateLawyerRouter);
app.use('/', chatRouter);

app.use('/admin', admin);
app.use('/news', news);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
