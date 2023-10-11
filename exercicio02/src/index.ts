import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";
import { BebeNatimorto } from "./model/BebeNatimorto";

const b1 = new BebeNormal(`997.908.000-x`, `Dorothy R. McIntire`, `3.5kg`, `42cm`, false);

b1.setId(`687.234.123-8`);
b1.setNome(`Darlene T. Moore`);
b1.setPeso(`4kg`);
b1.setAltura(`50cm`);
b1.setVacinado(true);

console.log(`ID: ${b1.getId()}, Nome: ${b1.getNome()}, Peso: ${b1.getPeso()}, Altura: ${b1.getAltura()}`);
console.log(`Vacinado:${b1.getVacinado()}`);

const b2 = new BebePrematuro(`993.622.678-02`, `Júlio Dias Alves`, `2kg`, `25cm`, `34`);

b2.setId(`581.211.262-23`);
b2.setNome(`Anna Carvalho Souza`);
b2.setPeso(`2,5kg`);
b2.setAltura(`20cm`);
b2.setSemanasGestacao(`36`);

console.log(`ID: ${b2.getId()}, Nome: ${b2.getNome()}, Peso: ${b2.getPeso()}, Altura: ${b2.getAltura()}`);
console.log(`Semanas de Gestação:${b2.getSemanasGestacao()}`);

const b3 = new BebeNatimorto(`190.061.331-08`, `Beatrice Ribeiro Dias`, `0,5kg`, `10cm`, `Malformações genéticas ou congênitas no bebê`);

b3.setId(`712.139.482-07`);
b3.setNome(`Matilde Castro Sousa`);
b3.setPeso(`1,5kg`);
b3.setAltura(`15cm`);
b3.setCausa(`Restrição do crescimento intrauterino`);

console.log(`ID: ${b3.getId()}, Nome: ${b3.getNome()}, Peso: ${b3.getPeso()}, Altura: ${b3.getAltura()}`);
console.log(`Causa da morte:${b3.getCausa()}`);
