import express from 'express';
import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';
import {Schema} from './data/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../db/db.json');
const adapter = new JSONFile<Schema>(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();
db.data.articles.push({
  id: '1',
  title: 'hello',
  content: 'world',
});
console.log(db.data);
await db.write();

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log('Started server with 8080');
});
