import express from 'express';
import cors from 'cors';
import api from './domain/wiki/index.js';

const app = express();
app.use(cors());
app.use(express.json());

const wikiApi = api;

app.post('/wiki', wikiApi.postWiki);

app.listen(8080, () => {
  console.log('Started server with 8080');
});
