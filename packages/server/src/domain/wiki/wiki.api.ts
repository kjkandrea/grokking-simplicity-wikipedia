import {Request, Response} from 'express';
import {
  throwObjectTypeError,
  throwObjectValueEmptyError,
} from '../../global/actions/validation.js';

import {Wiki} from './type.js';

interface WikiPayload {
  keyword: string;
  content: string;
}

interface WikiCRUD {
  create: (payload: WikiPayload) => Promise<void>;
  read: () => Promise<Wiki>;
}

class WikiApi {
  private wikiCRUD: WikiCRUD;

  constructor(wikiCRUD: WikiCRUD) {
    this.wikiCRUD = wikiCRUD;
  }

  static setup(wikiCRUD: WikiCRUD) {
    return new WikiApi(wikiCRUD);
  }

  public postWiki = async (req: Request, res: Response) => {
    const {body} = req;

    try {
      throwObjectTypeError(body, {
        keyword: 'string',
        content: 'string',
      });
      throwObjectValueEmptyError(body);
    } catch (error) {
      res.status(400).send({message: (error as Error).message, status: 400});
    }

    await this.wikiCRUD.create(body);
    res.status(204).send();
  };

  public getWiki = async (req: Request, res: Response) => {
    console.log(req);
    const wiki = await this.wikiCRUD.read();
    res.status(200).send(wiki);
  };
}

const _setupWikiApi = WikiApi.setup;
export default _setupWikiApi;
