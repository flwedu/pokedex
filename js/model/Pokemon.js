/**
 * Essa classe abstrai os resultados de uma consulta à API.
 *
 * @class Pokemon
 */
class Pokemon {
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

    this._id = id;
    this._nomeOcidental = name;
    this._spriteFrontal = sprites.front_default;
    this._tipo1 = typeName;
    this._tipo2 = typeName2 || "";
    this._peso = weight;
    this._stats = [...stats].map((atributo) => atributo.base_stat);
    this._statsLabel = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
  }

  get id() {
    return this._id;
  }
  get nomeOcidental() {
    return formatText(this._nomeOcidental);
  }
  get spriteFrontal() {
    return this._spriteFrontal;
  }
  get tipo1() {
    return this._tipo1;
  }
  get tipo2() {
    if (this._tipo2) return "/" + this._tipo2;
    else return "";
  }
  get peso() {
    return this._peso;
  }
  get stats() {
    return this._stats;
  }

  get statsLabel() {
    return this._statsLabel;
  }
}
