const express = require('express')
const resolve = require('path').resolve
const fallback =  require ('express-history-api-fallback')
const config = require('../config')
const jsonData = require('./database/mock-data.json')
const app = express();
const root = resolve(process.cwd(), config.get('STATIC_PATH'));

const logger = (req, res, next) => {
  console.log('Logging...');
  next();
}

app.use(logger);

app.get('/weeks', (req, res) => {
    res.json(jsonData.weeks);
})

app.get('/posts', (req, res) => {
    res.json(jsonData.posts);
})

app.get('/category', (req, res) => {
    const { weeks} = jsonData
    const categories = weeks.map(week => week.categories)
        .reduce((el, nextEl) => el.concat(nextEl))
        .filter((category, index, categories) => categories.indexOf(category) === index)
    res.json(categories)
})

app.use(fallback('index.html', { root }));

app.use((req, res, next) => {
  res.status(404).send('Page not found...');
  next();
});

app.post('/', (req, res) => {
    res.send("Is it working?")
})

module.exports = app;
