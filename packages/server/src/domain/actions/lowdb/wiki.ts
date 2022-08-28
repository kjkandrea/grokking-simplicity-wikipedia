import {Schema} from '../../data/schema.js';

type InvalidAbstractDBData = null;
type ValidAbstractDBData = Schema;

interface AbstractDBMethods {
  read: () => Promise<void>;
  write: () => Promise<void>;
}

type InvalidAbstractDB = AbstractDBMethods & {
  data: InvalidAbstractDBData;
};

type AbstractDB = AbstractDBMethods & {
  data: ValidAbstractDBData;
};

interface WikiPayload {
  keyword: string;
  content: string;
}

export class WikiCRUD {
  private db: AbstractDB;

  constructor(db: InvalidAbstractDB | AbstractDB) {
    if (db.data === null) {
      throw new Error('schema is null');
    } else {
      this.db = db;
    }
  }

  public create({keyword, content}: WikiPayload) {
    this.db.data.wiki[keyword] = WikiCRUD.makeWikiItemBy(content);

    return this.save();
  }

  private static makeWikiItemBy(content: string) {
    return {
      content: content,
      createdDateTime: new Date().toISOString(),
      viewCount: 0,
    };
  }

  private save() {
    return this.db.write();
  }
}
