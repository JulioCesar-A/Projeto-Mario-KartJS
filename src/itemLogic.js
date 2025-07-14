const itemsData = require('./data/items.json');

async function getRandomItem(){
  const randomItemId = Math.floor(Math.random() * 3) + 1;
  return itemsData.find(item => item.id === randomItemId);
}

async function raceDuel(character1, character2, diceResult1, diceResult2){
  console.log(`${character1.NOME} confrontou ${character2.NOME}!!`);

  console.log();
  console.log("Os jogadores receberam seus itens...");
  console.log();

  const item1 = await getRandomItem();  
  const item2 = await getRandomItem();  

  console.log(`${character1.NOME} recebeu o item: ${item1.name}`);
  console.log(`${character2.NOME} recebeu o item: ${item2.name}`);
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

module.exports = {
    raceDuel
};