/**b) Dragão (classes/Dragao.js)
• constructor(nome):
o Define ataqueMagico = "Sopro de Fogo Infernal".
• Sobrescreva agir():
o Exiba "[nome] lança [ataqueMagico]!".
o Reduza #energia em 30. */

class Dragao extends Criatura {

    nome;
    atmg;
    #energia;

constructor(nome, atmg, ){
    this.nome = nome;
    this.atmg = 'Sopro de Fogo Infernal';
    this.#energia = 100;
}

agir(){
    this.#energia -= 30;
    return `${nome} lança ${this.atmg}, esta com ${this.#energia} de mana`
}
descansar(){
    energia += 15;
    return `Recupera 15 de energia por o ${nome} ter descansado. Energia restaurada!`
}
}



module.exports = Dragao