const { characterSelect, rl } = require('./characterSelect.js');
const { playRaceEngine, declareWinner } = require('./raceEngine.js'); 

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


(async function main(){
  try {
    await characterSelect(player1);
    await characterSelect(player2);
    console.log(
        `🏁 Corrida entre ${player1.NOME} e ${player2.NOME} 🏁\n`
      );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }

})();