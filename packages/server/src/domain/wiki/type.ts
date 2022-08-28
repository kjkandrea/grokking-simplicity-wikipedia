export interface WikiItem {
  content: string;
  createdDateTime: string;
  viewCount: number;
}

export interface Wiki {
  [key: string]: WikiItem;
}
