let vitorias = Math.floor(Math.random() * 100) + 1;
let derrotas = Math.floor(Math.random() * vitorias) + 1;
let saldoVitorias
let nivel_atual


rank();

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel_atual)

function rank(){
    saldoVitorias = vitorias - derrotas;
    nivel(saldoVitorias);
}

function nivel(nivel){
    if (nivel <= 10){
        nivel_atual = "Ferro";
    } else if (nivel > 10 && nivel <= 20){
        nivel_atual = "Bronze";
    } else if (nivel > 20 && nivel <= 50){
        nivel_atual = "Prata";
    } else if (nivel > 50 && nivel <= 80){
        nivel_atual = "Ouro";
    } else if (nivel > 80 && nivel <= 90){
        nivel_atual = "Diamante";
    } else if (nivel > 90 && nivel <= 100){
        nivel_atual = "Lendário";
    } else if (nivel > 100){
        nivel_atual = "Imortal";
    } else {
        nivel_atual = "Sem Nivel"
    }
}