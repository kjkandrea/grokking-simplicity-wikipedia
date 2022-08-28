import express from 'express';
import cors from 'cors';
import setupWikiApi from './domain/wiki/index.js';

import setupDatabase from '@gsw/database';

const app = express();
app.use(cors());
app.use(express.json());

const database = await setupDatabase();
const wikiApi = setupWikiApi(database);

app.post('/wiki', wikiApi.postWiki);

app.listen(8080, () => {
  console.log('Started server with 8080');
});
