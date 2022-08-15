import {Request, Response} from 'express';
import {
  throwObjectTypeError,
  throwObjectValueEmptyError,
} from '../../global/calculations/validation.js';

const postWiki = (req: Request, res: Response) => {
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

  res.send(204);
};

export {postWiki};
