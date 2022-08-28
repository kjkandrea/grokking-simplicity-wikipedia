export interface Schema {
  wiki: Wiki;
}

export interface Wiki {
  [key: string]: WikiItem;
}

export interface WikiItem {
  content: string;
  createdDateTime: string;
  viewCount: number;
}
