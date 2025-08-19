/**b) Dragão (classes/Dragao.js)
• constructor(nome):
o Define ataqueMagico = "Sopro de Fogo Infernal".
• Sobrescreva agir():
o Exiba "[nome] lança [ataqueMagico]!".
o Reduza #energia em 30. */
const Criatura = require("./Criatura");
class Dragao extends Criatura {

    constructor(nome){
        super(nome)
        this.atmg = 'Sopro de Fogo Infernal';
    }

    agir(){
        this.setEnergia(-30);
        return `${this.nome} lança ${this.atmg}, esta com ${this.getEnergia()} de mana`
    }

    descansar(){
        this.setEnergia(15);
        return `Recupera 15 de energia por o ${this.nome} ter descansado. Energia restaurada em ${this.getEnergia()}!`
    }
}

module.exports = Dragao