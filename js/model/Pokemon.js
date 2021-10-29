import formatText from "../util/text.js";

/**
 * Essa classe abstrai os resultados de uma consulta à API.
 *
 * @class Pokemon
 */
export default class Pokemon {
  constructor(dados) {
    const {
      id,
      name,
      sprites,
      weight,
      stats,
      types: {
        0: {
          type: { name: typeName }, // Obtendo atributos aninhados
        },
        1: { type: { name: typeName2 = "" } = {} } = {}, // Caso não existam, será atribuído um valor default
      },
    } = dados;

    this.id = id;
    this.nomeOcidental = formatText(name);
    this.spriteFrontal = sprites?.front_default || "";
    this.tipo1 = typeName;
    this.tipo2 = typeName2;
    this.peso = weight;
    this.stats = [...stats].map((atributo) => atributo.base_stat);
  }
}

Pokemon.statsLabel = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
