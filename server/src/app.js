import express from 'express'
import { resolve } from 'path'

import fallback from 'express-history-api-fallback';

import config from '../config'

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();

app.use(express.static(root));

app.use(fallback('index.html', { root }));

app.use((req, res, next) => {
  res.status(404).send('Page not found...');
  next();
});

module.exports = app;
