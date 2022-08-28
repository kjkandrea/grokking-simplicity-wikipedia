import {Wiki, WikiItem} from './type.js';

type InvalidAbstractDBData = null;
type ValidAbstractDBData = {
  wiki: Wiki;
};

interface AbstractDBMethods {
  write: () => Promise<void>;
}

type InvalidAbstractDB = AbstractDBMethods & {
  data: InvalidAbstractDBData;
};

type ValidAbstractDB = AbstractDBMethods & {
  data: ValidAbstractDBData;
};

export type AbstractDB = InvalidAbstractDB | ValidAbstractDB;

interface WikiPayload {
  keyword: string;
  content: string;
}

class WikiCrud {
  private db: ValidAbstractDB;

  constructor(db: AbstractDB) {
    if (db.data === null) {
      throw new Error('schema is null');
    } else {
      this.db = db;
    }
  }

  static setup(db: AbstractDB) {
    return new WikiCrud(db);
  }

  public create({keyword, content}: WikiPayload) {
    this.db.data.wiki[keyword] = WikiCrud.makeWikiItemBy(content);

    return this.save();
  }

  public read(): Wiki {
    return {...this.db.data.wiki};
  }

  private static makeWikiItemBy(content: string): WikiItem {
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

const _setupWikiCrud = WikiCrud.setup;
export default _setupWikiCrud;
