import { type Token } from "./token";

export class Lexer {
  code: string;
  current = 0;

  constructor(code: string) {
    this.code = code;
  }

  static analyze(code: string): Token[] {
    const lexer = new Lexer(code);
    return lexer.tokenize();
  }

  tokenize(): Token[] {
    return [];
  }
}
