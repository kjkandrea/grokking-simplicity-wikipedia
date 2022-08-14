import express from 'express';
import {setup} from './domain/actions/lowdb/lowdb.js';
import {postWiki} from './domain/actions/wiki.ctrl.js';

const app = express();

const db = await setup();
const router = express.Router();

router.post('/wiki', postWiki);

app.listen(8080, () => {
  console.log('Started server with 8080');
});
