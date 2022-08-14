import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';
import {Schema} from '../data/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../../db/db.json');
const adapter = new JSONFile<Schema>(file);

export type DB = Low<Schema>;

const db: DB = new Low(adapter);

export const setup = () => db.read().then(() => db);
