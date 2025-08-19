/**d) Criatura Personalizada (classes/[Nome].js)
• Crie uma classe única (ex: Mago, Sereia, Lobisomem).
• Atributos/Métodos:
o Defina um ataqueMagico criativo.
o Sobrescreva agir() com uma ação temática e custo de energia personalizado. */
const Criatura = require("./Criatura");
class slime extends Criatura {

    constructor(nome){
        super(nome)
        this.atmg = 'enxurrada de  ácido';
    }

    agir(){
        this.setEnergia(-10);
        return `${this.nome} solta ${this.atmg}, esta com ${this.getEnergia()} de mana`
    }

    descansar(){
        this.setEnergia(15);
        return `Recupera 15 de energia por o ${this.nome} ter descansado. Energia restaurada em ${this.getEnergia()}!`
    }
}

module.exports = slime