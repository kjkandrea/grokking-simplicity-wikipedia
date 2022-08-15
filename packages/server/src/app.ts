import express from 'express';
import cors from 'cors';

import {postWiki} from './domain/actions/wiki.ctrl.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/wiki', postWiki);

app.listen(8080, () => {
  console.log('Started server with 8080');
});
