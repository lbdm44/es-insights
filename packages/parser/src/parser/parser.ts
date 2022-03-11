import * as crypto from "crypto";
import * as fs from "fs";

import AST from "../ast";

export class Parser {
  cache = new Map<string, AST>();

  parse(fileContents: string): AST {
    const fileHash = crypto.createHash("md5").update(fileContents).digest("hex");
    let ast = this.cache.get(fileHash);

    if (!ast) {
      ast = new AST();
      this.cache.set(fileHash, ast);
    }

    return ast;
  }

  parseFilePath(filePath: string): AST {
    const fileContents = fs.readFileSync(filePath, "utf8");

    return this.parse(fileContents);
  }
}
