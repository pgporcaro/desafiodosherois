// 1. Criando variáveis (usando uma lista de objetos para aplicar o laço de repetição)
 const herois = [
    { nome: "Superman", xp: 950 },
    { nome: "Mulher Maravilha", xp: 1500 },
    { nome: "Batman", xp: 3500},
    { nome: "Capitão América", xp: 5500 },
    { nome: "Flash", xp: 6500},
    { nome: "Lanterna Verde", xp: 7500 },
    { nome: "Aquaman", xp: 8500 },
    { nome: "Incrivel Hulk", xp: 9500 },
    { nome: "Homem de Ferro", xp: 10005 }

 ];

// 2. Utilizando Laço de repetição para percorrer os heróis

 for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

// 3. Estruturas de decisões para definir o nivel do heróis

 if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 6000) {
        nivel = "Ouro";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Platina";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {    
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    console.log(`O Herói de ${nome} tem ${xp} pontos de experiência e está no nível de  ${nivel}.`);
 }