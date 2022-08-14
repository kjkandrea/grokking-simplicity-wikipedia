import {DB} from './lowdb.js';
import {Wiki} from '../data/schema.js';

interface WikiPayload {
  keyword: string;
  content: string;
}

export const postWiki = (db: DB, payload: WikiPayload) => {
  const newWiki: Wiki = {
    [payload.keyword]: {
      content: payload.content,
      createdDateTime: new Date().toISOString(),
      viewCount: 0,
    },
  };

  Object.assign(db.data.wiki, newWiki);
  return db.write();
};
