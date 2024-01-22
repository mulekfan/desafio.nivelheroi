class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataque = this.obterAtaque();
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }

  obterAtaque() {
    switch (this.tipo) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      case "ninja":
        return "shuriken";
      default:
        return "ataque desconhecido";
    }
  }
}  

const heroiMago = new Heroi("Merlin", 100, "mago");
heroiMago.atacar();

const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
heroiGuerreiro.atacar();
