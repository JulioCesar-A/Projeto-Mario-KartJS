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
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

module.exports = {
    rollDice,
    getRandomBlock,
    logRollResult
};