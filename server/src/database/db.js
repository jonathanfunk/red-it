import pg from 'pg';
import config from '../../config';

const dbconfig = {
    host: 'localhost',
    user: config.get('POSTGRES_USER'),
    password: config.get('POSTGRES_PASSWORD'),
    database: config.get('POSTGRES_DBNAME')
}

const database = new pg.Pool(dbconfig);

database.query('SELECT author FROM posts', []).then(function(result){
    console.log(result)
}).catch(function(err) {
    console.log(err)
})

export default database;