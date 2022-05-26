const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(), 
  key: 'user_uid', // ключ - название куки
  secret: process.env.SESSION_SECRET ?? 'logossecret',
  resave: true, 
  saveUninitialized: false, // настройка для создания сессии, даже без авторизации
  cookie: {
    expires: 1000 * 60 * 60 * 24, // время "протухания" куки в миллисекундах
    httpOnly: true, // серверная установка флага httpOnly, запрет доступа к куке для клиентского JS
  },
};

module.exports = sessionConfig;
