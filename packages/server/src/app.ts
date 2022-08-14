import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {setup} from './domain/actions/lowdb/lowdb.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = await setup();

app.post('/wiki', (req, res) => {
  console.log(req.body);
  res.send(204);
});

app.listen(8080, () => {
  console.log('Started server with 8080');
});
