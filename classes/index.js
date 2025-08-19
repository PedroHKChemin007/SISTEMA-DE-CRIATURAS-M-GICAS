/**ARQUIVO PRINCIPAL (index.js)
1. Importe todas as classes de criaturas.
o Crie instâncias: Fada, Dragão, Gnomo e de sua criatura personalizada.
2. Execute:
o Chame agir() para todas as criaturas.
o Chame descansar() para todas as criaturas. */

const Dragao = require('./Dragao');
const Fada = require('./Fada');
const Gnomo = require('./Gnomo');
const slime = require('./slime');

let fadinha = new Fada('weedbell')
let cospefoisgo = new Dragao('spyro')
let ginomio = new Gnomo('DrDavidNelson')
let amoeba = new slime('amoeba')
console.log("------------------------------------------------------------------------");
console.log('ataques:');
console.log(fadinha.agir());
console.log(cospefoisgo.agir());
console.log(ginomio.agir());
console.log(amoeba.agir());
console.log("------------------------------------------------------------------------");
console.log('descanço:');
console.log(fadinha.descansar());
console.log(cospefoisgo.descansar());
console.log(ginomio.descansar());
console.log(amoeba.descansar());
console.log("------------------------------------------------------------------------");