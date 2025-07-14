const charactersData = require('./data/characters.json');
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

async function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

async function getRandomCharacter() {
  const randomId = Math.floor(Math.random() * 8) + 1;
  return charactersData.find(char => char.id === randomId);
}

async function characterSelect(player) {
    console.log("Escolha o seu personagem:");
  for (let x = 0; x < charactersData.length; x += 3) {
    if (x === 6) {
    console.log(`----------------------|-----------------------|-------------------------
${String(charactersData[x].id).padEnd(2)} -  ${charactersData[x].nome.padEnd(15)} | ${String(charactersData[x + 1].id).padEnd(2)} -  ${charactersData[x + 1].nome.padEnd(15)} | 9  -  Random
Velocidade:      ${String(charactersData[x].velocidade).padEnd(3)}  | Velocidade:      ${String(charactersData[x + 1].velocidade).padEnd(3)}  | Velocidade:      ???
Manobrabilidade: ${String(charactersData[x].manobrabilidade).padEnd(3)}  | Manobrabilidade: ${String(charactersData[x + 1].manobrabilidade).padEnd(3)}  | Manobrabilidade: ???
Poder:           ${String(charactersData[x].poder).padEnd(3)}  | Poder:           ${String(charactersData[x + 1].poder).padEnd(3)}  | Poder:           ???
`);
  } else {
    console.log(`----------------------|-----------------------|-------------------------
${String(charactersData[x].id).padEnd(2)} -  ${charactersData[x].nome.padEnd(15)} | ${String(charactersData[x + 1].id).padEnd(2)} -  ${charactersData[x + 1].nome.padEnd(15)} | ${String(charactersData[x + 2].id).padEnd(2)} - ${charactersData[x + 2].nome.padEnd(10)}
Velocidade:      ${String(charactersData[x].velocidade).padEnd(3)}  | Velocidade:      ${String(charactersData[x + 1].velocidade).padEnd(3)}  | Velocidade:      ${String(charactersData[x + 2].velocidade).padEnd(3)}
Manobrabilidade: ${String(charactersData[x].manobrabilidade).padEnd(3)}  | Manobrabilidade: ${String(charactersData[x + 1].manobrabilidade).padEnd(3)}  | Manobrabilidade: ${String(charactersData[x + 2].manobrabilidade).padEnd(3)}
Poder:           ${String(charactersData[x].poder).padEnd(3)}  | Poder:           ${String(charactersData[x + 1].poder).padEnd(3)}  | Poder:           ${String(charactersData[x + 2].poder).padEnd(3)}
                      |                       |`);
  }
}

  const id = parseInt(await askQuestion('Jogador - Selecione o número do personagem -> '));

  let selectedCharacter = {};

  switch (true) {
    case id === 9:
      selectedCharacter = await getRandomCharacter();
      break;

    case id > 0 && id < charactersData.length:
      selectedCharacter = charactersData.find(char => char.id === id);
      break;
  
    default:
      console.log("Id incorreto, informe um número válido.")
      return await characterSelect(player);
  }
    player.NOME = selectedCharacter.nome;
    player.VELOCIDADE = selectedCharacter.velocidade;
    player.MANOBRABILIDADE = selectedCharacter.manobrabilidade;
    player.PODER = selectedCharacter.poder;
}

module.exports = {
    characterSelect,
    rl
};