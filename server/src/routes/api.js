import cors from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';

export default function APIRoutes(router) {
    router.use(cors());
    router.use(bodyParser.json());

    router.get('/posts/:categoryid', (req, res) => {

    });

    router.get('/weeks', (req, res) => {

    });

    router.post('/posts', (req, res) => {

    })

    router.post('/users', (req, res) => {

    })

    router.post('/votes/:postid', (req, res) => {

    })
    return router;
}