// Counterのプロパティを定義
export interface Count {
  countNum: number;
}

// CounterのStateの初期値
export class initalCount implements Count {
  countNum = 0;
}
