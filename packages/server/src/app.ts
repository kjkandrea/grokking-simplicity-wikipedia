import express from 'express';
import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../db/db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();
console.log(db);

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log('Started server with 8080');
});
