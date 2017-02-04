import express from 'express';
import { resolve } from 'path';
import fallback from 'express-history-api-fallback';
import config from '../config';
import APIRoutes from './routes/api';
import AUTHRoutes from './routes/auth';
// import database from '../database/db';

const root = resolve(process.cwd(), config.get('APP_SECRET'));
export const SESSION_COOKIE = 'cookie_session';
const app = express();

const router = express.Router({
    mergeParams: true
})

app.use('/auth', AUTHRoutes(router));
app.use('/api', APIRoutes(router));
app.use(express.static(root));
app.use(fallback('index.html', { root }));

module.exports = app;
