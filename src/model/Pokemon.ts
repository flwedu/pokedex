export interface IPokemon {
  id: number,
  name: string,
  generation: {
    name: string,
    url: string
  },
  sprites: {
    front_default: string,
    back_default: string,
  },
  weight: string,
  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }[],
  types: {
    slot: number,
    type: {
      name: string,
      url: string
    }
  }[],
}

export const statsLabel = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
