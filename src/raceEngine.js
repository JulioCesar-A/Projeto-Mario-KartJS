const { raceDuel } = require('./itemLogic.js');
const { setTimeout } = require('timers/promises')
const { rollDice, logRollResult, getRandomBlock } = require('./rollDice.js');

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
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA"){
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      
      await logRollResult(
        character2.NOME,
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
    await setTimeout(5000);
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

module.exports = {
    playRaceEngine,
    declareWinner
};