"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebeNatimorto = void 0;
const Bebe_1 = require("./Bebe");
class BebeNatimorto extends Bebe_1.Bebe {
    constructor(_id, _nome, _peso, _altura, _causa) {
        super(_id, _nome, _peso, _altura);
        this.causa = _causa;
    }
    setCausa(_causa) {
        this.causa = _causa;
    }
    getCausa() {
        return this.causa;
    }
}
exports.BebeNatimorto = BebeNatimorto;
//# sourceMappingURL=BebeNatimorto.js.map