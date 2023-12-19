//variaveis
let nomeDoHeroi = "SavinhoDeIonia"
let pontosDeXP = 800

//decisão
let nivelDoHeroi

if (pontosDeXP < 1000) {
    nivelDoHeroi = "Ferro";
} else if (pontosDeXP >= 1001 && pontosDeXP <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (pontosDeXP >= 2001 && pontosDeXP <= 5000) {
    nivelDoHeroi = "Prata";
} else if (pontosDeXP >= 6001 && pontosDeXP <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (pontosDeXP >= 7001 && pontosDeXP <= 8000) {
    nivelDoHeroi = "Platina";
} else if (pontosDeXP >= 8001 && pontosDeXP <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (pontosDeXP >= 9001 && pontosDeXP <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

//saida do programa
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}!`)