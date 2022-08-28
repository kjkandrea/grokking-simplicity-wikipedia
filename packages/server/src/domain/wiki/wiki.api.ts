import {Request, Response} from 'express';
import {
  throwObjectTypeError,
  throwObjectValueEmptyError,
} from '../../global/actions/validation.js';

interface WikiPayload {
  keyword: string;
  content: string;
}

interface WikiCRUD {
  create: (payload: WikiPayload) => Promise<void>;
}

class WikiApi {
  private wikiCRUD: WikiCRUD;

  constructor(wikiCRUD: WikiCRUD) {
    console.log('wikiCRUDDDD', wikiCRUD.create);
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
    res.send(204);
  };
}

const setupWikiApi = WikiApi.setup;
export default setupWikiApi;
