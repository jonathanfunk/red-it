import cors from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';
import { SESSION_COOKIE } from './../app';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';


export default function APIRoutes(router) {
    router.use(cors({
        origin: ['http://localhost:8000'],
        credentials: true
    }));
    router.use(bodyParser.json());
    router.use(cookieParser());
    
    router.use((req, res, next) => {
        if(!req.cookies[SESSION_COOKIE]){
            return res.status(403).json({ error: 'Not authoritah' });
        }
        const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE])
        console.log(sessionUser.email)
        next();
    })

    router.get('/posts/:categoryid', (req, res) => {
        database.query('SELECT * FROM posts WHERE "categoryid" = $1', [req.params.categoryid]).then((response) => {
            res.json(response.rows);
        }).catch((error) => {
            res.status(500).json({ error });
        });
    });

    router.get('/weeks', (req, res) => {
        const weeksQuery = `select
                                weeks.weekid,
                                weeks.title,
                            json_agg(json_build_object('id',category.categoryid, 'title',category.title)) as category
                            from
                                weeks
                                inner join category on category.weekid = weeks.weekid
                            group by
                                weeks.weekid
                            order by
                                weeks.title asc;`;
        database.query(weeksQuery, []).then((response) => {
            console.log('Working?')
            res.json(response.rows);
        }).catch((error) => {
            res.status(500).json({ error });
        });
    });

    router.post('/posts', (req, res) => {
        const { title, date, description, link, author, votes, userid, categoryid } = req.body.post;
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

    router.post('/votes/:postid', (req, res) => {
        console.log(req.body.vote);
        const { userid, postid } = req.body.vote;
        database.query('INSERT INTO user_post_votes ("userid", "postid") VALUES($1, $2)', 
        [
          userid,
          postid, 
        ])
        .then((response) => {
            res.status(200).json({ success: true});
        }).catch((error) => {
            res.status(500).json({ error });
        });
    })
    return router;
}