const readline = require('readline');
const charactersData = require('./data/characters.json');
const itemsData = require('./data/items.json');


const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let player1 = {
  NOME: "",
  VELOCIDADE: null,
  MANOBRABILIDADE: null,
  PODER: null,
  PONTOS: 0,
};

let player2 = {
  NOME: "",
  VELOCIDADE: null,
  MANOBRABILIDADE: null,
  PODER: null,
  PONTOS: 0,
};

async function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

async function getRandomCharacter() {
  return Math.floor(Math.random() * 8) + 1;
}

async function characterSelect(player) {
  console.log("Escolha o seu personagem:");

  // charactersData.forEach(
  //   char => console.log(`${char.id} - ${char.nome}\nVelocidade: ${char.velocidade}\nManobrabilidade: ${char.manobrabilidade}\nPoder: ${char.poder}\n\n------------
  //     `)
  // );

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
      const randomId = await getRandomCharacter();
      selectedCharacter = charactersData.find(char => char.id === randomId);
      player.NOME = selectedCharacter.nome;
      player.VELOCIDADE = selectedCharacter.velocidade;
      player.MANOBRABILIDADE = selectedCharacter.manobrabilidade;
      player.PODER = selectedCharacter.poder;
      break;

    case id < 9 && id > 0:
      selectedCharacter = charactersData.find(char => char.id === id);
      player.NOME = selectedCharacter.nome;
      player.VELOCIDADE = selectedCharacter.velocidade;
      player.MANOBRABILIDADE = selectedCharacter.manobrabilidade;
      player.PODER = selectedCharacter.poder;
      break;
  
    default:
      console.log("Id incorreto, informe um número válido.")
      break;
  }
}

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

async function getRandomItem(){
  return Math.floor(Math.random() * 3) + 1;
}

async function raceDuel(character1, character2, diceResult1, diceResult2){
  console.log(`${character1.NOME} confrontou ${character2.NOME}!!`);

  console.log();
  console.log("Os jogadores receberam seus ítems...");
  console.log();

  const randomItem1Id = await getRandomItem(); 
  const randomItem2Id = await getRandomItem(); 
  
  const item1 = itemsData.find(item => item.id === randomItem1Id);
  const item2 = itemsData.find(item => item.id === randomItem2Id);

  console.log(`${character1.NOME} recebeu o ítem: ${item1.name}`);
  console.log(`${character2.NOME} recebeu o ítem: ${item2.name}`);
  console.log();

  let powerResult1;
  let powerResult2;
  
  switch (true){
    case item1.category === "defensive" && item2.category === "defensive":
      if (item1.name === "Boo"){
        powerResult1 = diceResult1 + character1.PODER - (character2.PODER * item1.points); 
      }
      if (item2.name === "Boo"){
        powerResult2 = diceResult2 + character2.PODER - (character1.PODER * item2.points); 
      }
    break;

    case item1.category === "offensive" && item2.category === "defensive":
      powerResult1 = diceResult1 + character1.PODER;
      if (item2.name === "Boo"){
        powerResult2 = diceResult2 + character2.PODER - (item1.points * item2.points); 
      }
    break;

    case item2.category === "offensive" && item1.category === "defensive":
      powerResult2 = diceResult2 + character2.PODER;
      if (item1.name === "Boo"){
        powerResult1 = diceResult1 + character1.PODER - (item2.points * item1.points);
      }
    break;

    default:
      powerResult1 = diceResult1 + character1.PODER + item2.points;
      powerResult2 = diceResult2 + character2.PODER + item1.points;
    break;
  }

  return { powerResult1, powerResult2 };
}

async function playRaceEngine(character1, character2){

  for(let round = 1; round <= 8; round++){
    console.log(`🏁Rodada ${round}🏁`);

    // Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA"){
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        player1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        player2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA"){
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        player1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      
      await logRollResult(
        player2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    
    if (block === "CONFRONTO"){
      let results = await raceDuel(character1, character2, diceResult1, diceResult2);
      let powerResult1 = results.powerResult1;
      let powerResult2 = results.powerResult2;

      
      console.log(`${character1.NOME} fez ${powerResult1} pontos`);
      console.log(`${character2.NOME} fez ${powerResult2} pontos`);

      if (powerResult1 > powerResult2 && character2.PONTOS > 0){
        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto`);
        character2.PONTOS--;
      }
      if (powerResult2 > powerResult1 && character1.PONTOS > 0){
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto`);
        character1.PONTOS--;
      }
      

      console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum jogador perde ponto" : "");
    }

    if (totalTestSkill1 > totalTestSkill2){
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill1 < totalTestSkill2){
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("---------------");
  }
}

async function declareWinner(character1, character2){
  console.log("Resultado Final:")
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS){
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns`);
  } else if (character2.PONTOS > character1.PONTOS){
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns`);
  } else {
    console.log("A corrida terminou em empate");
  }
}

(async function main(){
  try {
    await characterSelect(player1);
    await characterSelect(player2);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close()
  }

  // console.log(
  //     `🏁 Corrida entre ${player1.NOME} e ${player2.NOME} 🏁\n`
  //   );
  //   await playRaceEngine(player1, player2);

  //   await declareWinner(player1, player2);
})();