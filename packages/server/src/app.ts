import * as express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log('Started server with 8080');
});
