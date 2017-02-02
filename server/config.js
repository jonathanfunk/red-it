const nconf = require('nconf');
const config = module.exports = nconf.argv()

.env([
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DBNAME',
  'APP_SECRET',
  'STATIC_PATH'
])

.defaults({
  'STATIC_PATH': '../web.browser/build',
  'HTTPS': (process.env.NODE_ENV === 'production')
})
