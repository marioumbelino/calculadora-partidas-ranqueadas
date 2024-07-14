function setRankedlevel(victories, defeats) {
    let winningBalance = victories - defeats
    let level = "Begginer"
    
    if (winningBalance <= 10) {
        level = "Ferro"
    } else if (winningBalance <= 20) {
        level = "Bronze"
    } else if (winningBalance <= 50) {
        level = "Prata"
    } else if (winningBalance <= 80) {
        level = "Ouro"
    } else if (winningBalance <= 90) {
        level = "Diamante"
    } else if (winningBalance <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }

    console.log(`O herói tem o saldo de ${winningBalance} está no nível de ${level}`)
}

setRankedlevel(126, 49)