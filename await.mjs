import * as fs from "node:fs/promises";

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} ha vinto un premio nella lotteria!`);
      } else {
        reject(new Error(`${player} ha perso la lotteria.`));
      }
    });
  });
}

async function getResults() {
  const players = ['Tina', 'Jorge', 'Julien'];
  const results = [];

  for (const player of players) {
    try {
      const result = await luckyDraw(player);
      console.log(result);
      results.push(result);
    } catch (error) {
      console.error(error.message);
      results.push(error.message);
    }
  }

  
  try {
    await fs.writeFile('luckyDrawResults.txt', results.join('\n'), 'utf-8');
    console.log("Risultati salvati con successo in 'luckyDrawResults.txt'.");
  } catch (error) {
    console.error('Errore durante il salvataggio dei risultati:', error.message);
  }
}


getResults();
