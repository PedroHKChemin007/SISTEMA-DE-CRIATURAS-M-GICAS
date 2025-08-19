/*Atributos:
• nome (público).
• ataqueMagico (público).
• #energia (privado, valor inicial = 100).
Métodos:
• constructor(nome, ataqueMagico):
o Inicializa os atributos.
• alterarEnergia(valor):
o Modifica #energia e exibe: "[nome] agora tem [energia] de energia.".
• agir():
o Padrão: Exibe "[nome] usa [ataqueMagico]!" e reduz #energia em 10.
• descansar():
o Padrão: Recupera 15 de #energia e exibe "[nome] descansou. Energia restaurada!". */

class Criatura {

    nome;
    atmg;
    #energia;

constructor(nome, atmg){
    this.nome = nome;
    this.atmg = atmg;
    this.#energia = 100;
}

agir(){
    this.#energia -= 10;
    return `${nome} agora tem ${energia} de energia.`
}
descansar(){
    energia += 15;
    return `Recupera 15 de energia por o ${nome} ter descansado. Energia restaurada!`
}
}



module.exports = Criatura