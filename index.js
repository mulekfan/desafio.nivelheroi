

// Lista de heróis com seus respectivos XP

const herois = [
    { nome: "tiago", xp: 2640 },
    { nome: "heroi1", xp: 6000 },
    { nome: "heroi2", xp: 7500 },
    { nome: "felipe", xp: 7500 },
   
];

// Loop para verificar o nível de cada herói


for (let heroi of herois) {
    let nome = heroi.nome;
    let xp = heroi.xp;
    let nivel;

    // Estrutura de decisão


    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída para cada herói
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
