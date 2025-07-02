const player1 = {
  NOME: "Mario",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 2,
  PONTOS: 0,
};


async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break;

    case random < 0.66:
      result = "CURVA"
      break;

    default:
      result = "CONFRONTO"
    break;
  }

  return result
}

async function logRollResult(characterName, block, diceResult, attribute){
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult}`);

}


(async function main(){
  console.log(
      `🏁 Corrida entre ${player1.NOME} e ${player2.NOME} 🏁\n`
    );

    await playRaceEngine(player1, player2);
})();