import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';
import {Schema} from './schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, './db.json');
const adapter = new JSONFile<Schema>(file);

const setupDatabase = () => {
  const database = new Low(adapter);
  return database.read().then(() => database);
};

export default setupDatabase;
