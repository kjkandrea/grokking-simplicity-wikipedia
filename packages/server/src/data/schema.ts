export interface Schema {
  wiki: Wiki;
}

type Keyword = string;
type Content = string;

interface Wiki {
  [key: Keyword]: Content;
}
