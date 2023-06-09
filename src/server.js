import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
// import apiRouter from './routes/apiRouter';

const FileStore = store(session);

const PORT = process.env.SERVER_PORT || 3000;
const app = express();


const sessionConfig = {
  name: 'sId',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  store: new FileStore(),
  saveUninitialized: false,
  app.engine('jsx', jsxRender);
  app.set('view engine', 'jsx');
  app.set('views', path.join(__dirname, 'components'));
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
require('dotenv').config();


app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
// app.use('/api/auth', apiRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
