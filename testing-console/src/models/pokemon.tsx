export interface Result {
  name: string;
  url: string;
}

export interface Response {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
