/**c) Gnomo (classes/Gnomo.js)
• constructor(nome):
o Define ataqueMagico = "Chuva de Cogumelos Tóxicos".
• Sobrescreva agir():
o Exiba "[nome] invoca [ataqueMagico]!".
o Reduza #energia em 5. */
const Criatura = require("./Criatura");
class Gnomo extends Criatura {

    constructor(nome){
        super(nome)
        this.atmg = 'Chuva de Cogumelos Tóxicos';
    }

    agir(){
        this.setEnergia(-5);
        return `${this.nome} invoca ${this.atmg}, esta com ${this.getEnergia()} de mana`
    }

    descansar(){
        this.setEnergia(15);
        return `Recupera 15 de energia por o ${this.nome} ter descansado. Energia restaurada em ${this.getEnergia()}!`
    }
}

module.exports = Gnomo