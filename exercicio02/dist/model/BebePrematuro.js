"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebePrematuro = void 0;
const Bebe_1 = require("./Bebe");
class BebePrematuro extends Bebe_1.Bebe {
    constructor(_id, _nome, _peso, _altura, _semanasGestacao) {
        super(_id, _nome, _peso, _altura);
        this.semanasGestacao = _semanasGestacao;
    }
    setSemanasGestacao(_semanasGestacao) {
        this.semanasGestacao = _semanasGestacao;
    }
    getSemanasGestacao() {
        return this.semanasGestacao;
    }
}
exports.BebePrematuro = BebePrematuro;
//# sourceMappingURL=BebePrematuro.js.map