import express from 'express';
import { resolve } from 'path';
import fallback from 'express-history-api-fallback';
import config from '../config';
import APIRoutes from './routes/api';

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();

const router = express.Router({
    mergeParams: true
})

app.use(APIRoutes(router));
app.use(express.static(root));
app.use(fallback('index.html', { root }));

module.exports = app;
