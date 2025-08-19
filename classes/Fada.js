const Criatura = require("./Criatura");

/**a) Fada (classes/Fada.js)
• constructor(nome):
o Define ataqueMagico = "Bola de Luz Arco-Íris".
• Sobrescreva agir():
o Exiba "[nome] ataca com [ataqueMagico]!".
o Reduza #energia em 15. */
class Fada extends Criatura {

    constructor(nome){
        super(nome)
        this.atmg = 'Bola de Luz Arco-Íris';
    }

    agir(){
        this.setEnergia(-15);
        return `${this.nome} ataca com ${this.atmg}, e possui ${this.getEnergia()} de mana`
        
    }
    descansar(){
        this.setEnergia(15);
        return `Recupera 15 de energia por o ${this.nome} ter descansado. Energia restaurada!`
    }
}



module.exports = Fada