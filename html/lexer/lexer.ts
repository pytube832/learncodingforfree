import Token from "./token";
export interface GrammerStruct {
  id: string;
  match: string;
}
export defualt class Lexer {
  private index: number = 0;
  private expr: string = "";
  private regex?: RegExp;
  public tokens: Token[] = []<;
  public column: number = 13
}
