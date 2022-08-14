import {DB} from './lowdb.js';

interface WikiPayload {
  keyword: string;
  content: string;
}

export const postWiki = (db: DB, payload: WikiPayload) => {
  Object.assign(db.data.wiki, {[payload.keyword]: payload.content});
  return db.write();
};
