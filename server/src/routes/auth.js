import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import database from '../database/db';
import bcrypt from 'bcrypt-nodejs';
import cookieParser from 'cookie-parser';
import config from './../../config'

const salt = bcrypt.genSaltSync(10);

import { SESSION_COOKIE } from './../app';


export default function (router) {
  router.use(cors());
  router.use(bodyParser.json());
  router.use(cookieParser())

  router.post('/register', (req, res) => {
    const { fname, lname, email, password } = req.body.user;
    const passwordToSave = bcrypt.hashSync(password, salt);
    database.query('INSERT INTO users(fname, lname, email, password) VALUES($1, $2, $3, $4)',
      [
        fname,
        lname,
        email,
        passwordToSave
      ])
      .then((response) => {
        const sessionUser = { email: email }
        const JWT = jwt.sign(sessionUser, config.get('APP_SECRET'));
        
        res.status(200).cookie(SESSION_COOKIE, JWT, {
          secure: config.get('HTTPS'),
          maxAge: 7200000,
          httpOnly: true
        }).json(response.rows)

      }).catch((err) => {
        res.json(err);
      });
  })
  router.post('/login', (req, res) => {

  })

  router.post('/logout', (req, res) => {
    if (req.cookies.token) {
      res.clearCookie(SESSION_COOKIE);
    }
    res.status(200).json({success: 'Thank you come again.'})
  })

  return router;
}

// const postRequest = {
//   method: 'POST',
//   credentials: 'include',
//   headers: new Headers({
//     'Content-Type': 'application/json;charset=UTF-8'
//   })
// }

//fetch('/skjdfn', postRequest)

//export const createPost = (tags, post) => (dispatch) => fetch `${CRUD_ROOT}${POSTS_URL}/create`