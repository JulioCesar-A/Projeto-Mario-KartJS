const readline = require('readline');
const charactersData = require('./data/characters.json');


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

  charactersData.forEach(
    char => console.log(`${char.id} - ${char.nome}\nVelocidade: ${char.velocidade}\nManobrabilidade: ${char.manobrabilidade}\nPoder: ${char.poder}\n\n------------
      `)
  );

  console.log(`9 - Random\nVelocidade: ???\nManobrabilidade: ???\nPoder: ???\n\n------------
  `);

  const id = parseInt(await askQuestion('Jogador - Selecione o número do personagem -> '));

  console.log(typeof id);
  let selectedCharacter = {};

  switch (true) {
    case id === 9:
      const randomId = await getRandomCharacter();
      selectedCharacter = charactersData.find(char => char.id === randomId);
      player.NOME = selectedCharacter.nome;
      player.VELOCIDADE = selectedCharacter.velocidade;
      player.MANOBRABILIDADE = selectedCharacter.manobrabilidade;
      player.PODER = selectedCharacter.poder;

      console.log(`Personagem selecionado: ${player.NOME}`);
      break;

    case id < 9 && id > 0:
      selectedCharacter = charactersData.find(char => char.id === id);
      player.NOME = selectedCharacter.nome;
      player.VELOCIDADE = selectedCharacter.velocidade;
      player.MANOBRABILIDADE = selectedCharacter.manobrabilidade;
      player.PODER = selectedCharacter.poder;

      console.log(`Personagem selecionado: ${player.NOME}`);
      break;
  
    default:
      console.log(id);
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

async function playRaceEngine(character1, character2){

  for(let round = 1; round <= 8; round++){
    console.log(`🏁Rodada ${round}🏁`);

    // Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    
    // Rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();


    // Teste de habilidade
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
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou ${character2.NOME}!!`);
      
      await logRollResult(
        player1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );
      
      await logRollResult(
        player2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );


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
  // console.log(
      // `🏁 Corrida entre ${player1.NOME} e ${player2.NOME} 🏁\n`
    // );
  try {
    await characterSelect(player1);
    console.log(player1);
    
    await characterSelect(player2);
    console.log(player2);

    
  } catch (error) {
    console.error(error);
  } finally {
    rl.close()
  }




    // await playRaceEngine(player1, player2);

    // await declareWinner(player1, player2);
})();