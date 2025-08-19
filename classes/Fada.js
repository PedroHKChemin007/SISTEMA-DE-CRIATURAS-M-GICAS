const Criatura = require("./Criatura");

/**a) Fada (classes/Fada.js)
• constructor(nome):
o Define ataqueMagico = "Bola de Luz Arco-Íris".
• Sobrescreva agir():
o Exiba "[nome] ataca com [ataqueMagico]!".
o Reduza #energia em 15. */
class Fada extends Criatura {

    nome;
    atmg;
    #energia;

constructor(nome, atmg, 'Bola de Luz Arco-Íris' ){
    this.nome = nome;
    this.atmg = atmg;
    this.#energia = 100;
}

agir(){
    this.#energia -= 15;
    return `${nome} ataca com ${this.atmg}`
}
descansar(){
    energia += 15;
    return `Recupera 15 de energia por o ${nome} ter descansado. Energia restaurada!`
}
}



module.exports = Criatura