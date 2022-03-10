export class Parser {
  cache: Map<string, string>;

  constructor() {
    this.cache = new Map<string, string>();
  }

  parse(fileContents: string): string {
    this.cache.set(fileContents, fileContents);

    return fileContents;
  }
}
