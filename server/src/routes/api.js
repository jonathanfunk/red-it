import cors from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';
import { SESSION_COOKIE } from './../app';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';


export default function APIRoutes(router) {
    router.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true
    }));
    router.use(bodyParser.json());
    router.use(cookieParser());
    
    router.use((req, res, next) => {
        if(!req.cookies[SESSION_COOKIE]){
            return res.status(403).json({ error: 'Not authorized' });
        }
        const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE])
        console.log(sessionUser.email)
        next();
    })

    router.get('/posts/1', (req, res) => {
        const postsQuery = `SELECT
                                posts.postid,
                                posts.author,
                                posts.votes,
                                posts.description,
                                posts.link,
                            JSON_AGG(category.title) as category
                            FROM
                                posts
                                inner join category on category.categoryid = posts.categoryid
                            GROUP BY
                                posts.postid
                            ORDER BY
                                posts.postid asc`;
        database.query(postsQuery, []).then((response) => {
            res.json(response.rows);
        }).catch((error) => {
            res.status(500).json({ error });
        });
    });

    router.get('/weeks', (req, res) => {
        const weeksQuery = `SELECT
                                weeks.weekid,
                                weeks.title,
                            JSON_AGG(category.title) as category
                            FROM
                                weeks
                                inner join category on category.weekid = weeks.weekid
                            GROUP BY
                                weeks.weekid
                            ORDER BY
                                weeks.title asc;`;
        database.query(weeksQuery, []).then((response) => {
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