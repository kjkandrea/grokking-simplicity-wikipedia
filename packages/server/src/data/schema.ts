export interface Schema {
  wiki: Wiki;
}

type Keyword = string;
type Content = string;

export interface Wiki {
  [key: Keyword]: {
    content: Content;
    createdDateTime: string;
    viewCount: number;
  };
}
