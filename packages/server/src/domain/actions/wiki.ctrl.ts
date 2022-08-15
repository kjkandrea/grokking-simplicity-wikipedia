import {Request, Response} from 'express';
import {objectTypeErrorThrower} from '../../global/calculations/validation.js';

const postWiki = (req: Request, res: Response) => {
  const {body} = req;

  try {
    objectTypeErrorThrower(body, {
      keyword: 'string',
      content: 'string',
    });
  } catch (error) {
    res.status(400).send({message: (error as Error).message, status: 400});
  }

  res.send(204);
};

export {postWiki};
