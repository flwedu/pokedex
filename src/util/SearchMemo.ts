import { IPokemon } from "src/model/Pokemon";

export class SearchMemo {
  private readonly memo: Map<string, IPokemon>;

  constructor() {
    this.memo = new Map();
  }

  public add(query: string, pokemon: IPokemon) {
    this.memo.set(query, pokemon);
  }

  public get(query: string): IPokemon | undefined {
    return this.memo.get(query);
  }

  public has(query: string): boolean {
    return this.memo.has(query);
  }

  public clear() {
    this.memo.clear();
  }
}
