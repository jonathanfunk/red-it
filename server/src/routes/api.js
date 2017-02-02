import cors from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';

export default function APIRoutes(router) {
    router.use(cors());
    router.use(bodyParser.json());

    router.get('/posts/:categoryid', (req, res) => {
        database.query('SELECT * FROM posts WHERE "categoryid" = $1', [req.params.categoryid]).then((response) => {
            res.json(response.rows);
        }).catch((error) => {
            res.status(500).json({ error });
        });
    });

    router.get('/weeks', (req, res) => {
        database.query('SELECT * FROM weeks', []).then((response) => {
            res.json(response.rows);
        }).catch((error) => {
            res.status(500).json({ error });
        });
    });

    router.post('/posts', (req, res) => {
        console.log(req.body);
        const { title, date, description, link, author, votes, userid, categoryid } = req.body.post;
        console.log(title);
        database.query('INSERT INTO posts VALUES($1, $2, $3, $4, $5, $6, $7, $8)', 
        [
          title, 
          date, 
          description, 
          link, 
          author, 
          votes, 
          userid, 
          categoryid,
        ])
        .then((response) => {
            res.status(200).json({ success: true});
        }).catch((error) => {
            res.status(500).json({ error });
        });
    })

    router.post('/users', (req, res) => {

    })

    router.post('/votes/:postid', (req, res) => {

    })
    return router;
}