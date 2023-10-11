"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PessoaFisica_1 = require("./model/PessoaFisica");
const PessoaJuridica_1 = require("./model/PessoaJuridica");
const p1 = new PessoaFisica_1.PessoaFisica(`Cauã Araujo Barros`, `634.110.307-71`);
p1.setNome(`Sofia Fernandes Barros`);
p1.setCpf(`297.310.154-93`);
console.log(`Nome: ${p1.getNome()}, CPF: ${p1.getCpf()}`);
console.log(`Documento Identificador: ${p1.documentoIdentificador()}`);
const p2 = new PessoaJuridica_1.PessoaJuridica(`Sofia Fernandes Barros`, `297.310.154-93`);
p2.setNome(`Cauã Araujo Barros`);
p2.setCnpj(`634.110.307-71`);
console.log(`Nome: ${p2.getNome()}, CNPJ: ${p2.getCnpj()}`);
console.log(`Documento Identificador: ${p2.documentoIdentificador()}`);
//# sourceMappingURL=index.js.map