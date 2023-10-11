"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bebe = void 0;
class Bebe {
    constructor(_id, _nome, _peso, _altura) {
        this.id = _id;
        this.nome = _nome;
        this.peso = _peso;
        this.altura = _altura;
    }
    setId(_id) {
        this.id = _id;
    }
    getId() {
        return this.id;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getPeso() {
        return this.peso;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getAltura() {
        return this.altura;
    }
}
exports.Bebe = Bebe;
//# sourceMappingURL=Bebe.js.map