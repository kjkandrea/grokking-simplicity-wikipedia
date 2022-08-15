import {Request, Response} from 'express';

const postWiki = (req: Request, res: Response) => {
  const {body} = req;

  if (typeof body.keyword !== 'string') {
    res.status(400).send({message: 'keyword 가 잘못되었습니다.', status: 400});
  }

  res.send(204);
};

export {postWiki};
