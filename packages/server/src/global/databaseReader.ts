import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';
import {Schema} from '../domain/wiki/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../../db/db.json');
const adapter = new JSONFile<Schema>(file);

const database = new Low(adapter);
await database.read();

export default database;
