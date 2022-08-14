import express from 'express';
import {postWiki} from './actions/wiki.js';
import {setup} from './actions/lowdb.js';

const app = express();

const db = await setup();

postWiki(db, {
  keyword: '키워드에용',
  content: '초선이에용',
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log('Started server with 8080');
});
