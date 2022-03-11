export enum TokenType {
  LineTerminator = 'LINE_TERMINATOR',
  Slash = "SLASH",
}

export interface Token {
  type: TokenType;
  content: string;
}
