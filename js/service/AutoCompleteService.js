var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * This class loads data from a file and provides an array with the pokemon names
 */
var AutoCompleteService = /** @class */ (function () {
    /**
     * @param {string} dataPath URL path to Pokémon names Json resource
     */
    function AutoCompleteService(dataPath) {
        var _this = this;
        this.loadDataFromFile(dataPath)
            .then(this.extractPropertiesToArray)
            .then(function (result) { return (_this._arrayDeDados = result); }).catch(function () { return _this._arrayDeDados = []; });
    }
    /**
     * Loads the data of an local JSON file.
     * @param {string | URL} dataPath URL of the file
     */
    AutoCompleteService.prototype.loadDataFromFile = function (dataPath) {
        return __awaiter(this, void 0, void 0, function () {
            var results, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch(dataPath)];
                    case 1:
                        results = _b.sent();
                        if (!results.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, results.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        _a = Error.bind;
                        return [4 /*yield*/, results.text()];
                    case 4: throw new (_a.apply(Error, [void 0, _b.sent()]))();
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        console.error("Error getting pokémon lists to AutoCompleteService");
                        console.error(err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Extract values presents in JSON
     * @param {JSON} rawData data in JSON format.
     * @returns {string[]} a string array containing the extracted values.
     */
    AutoCompleteService.prototype.extractPropertiesToArray = function (rawData) {
        // Transferindo os valores do objeto para o array
        // Dos valores já são retirados os nomes e convertidos para lowercase
        return Object.values(rawData).map(function (element) { return element.name.toLowerCase(); });
    };
    /**
     * returns all values that matches a string.
     * @param {string} name the value to be searched in the array
     * @returns {string[]} a string array
     */
    AutoCompleteService.prototype.listarPorAproximacao = function (name) {
        // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query
        return this._arrayDeDados.filter(function (item) { return item.includes(name); }).slice(0, 5);
    };
    return AutoCompleteService;
}());
export default AutoCompleteService;
