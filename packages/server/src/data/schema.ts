export interface Schema {
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  content: string;
}
