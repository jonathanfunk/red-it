require('babel-register')({
  'presets': ['es2015']
});

const PORT = 8000
require('./src/app.js').listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}!`);
});
