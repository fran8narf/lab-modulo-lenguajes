//1st iteration
/* class SlotMachine {
  constructor() {
    this.coins = 0; // Contador de monedas
  }

  // Método para jugar
  play() {
    this.coins++; // Incrementamos las monedas al jugar

    // Generar tres booleanos aleatorios para las ruletas
    const leftReel = Math.floor(Math.random() * 10);
    const middleReel = Math.floor(Math.random() * 10);
    const righeReel = Math.floor(Math.random() * 10);

    // Evaluar si el usuario ha ganado
    if (leftReel && middleReel && righeReel) {
    console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    this.coins = 0; // Reiniciar el contador de monedas tras ganar
    } else {
    console.log("Good luck next time!!");
    }
  }
}
const machine1 = new SlotMachine();
// Logs
machine1.play(); */

class SlotMachine {
  constructor() {
    this.coins = 0;
    this.totalPlays = 0;
    this.wins = 0;
    this.losses = 0;
    this.coinsLost = 0;
    this.coinsWon = 0;
  }

  play() {
    this.coins++;
    this.totalPlays++;
    const leftReel = Math.floor(Math.random() * 5);
    const middleReel = Math.floor(Math.random() * 5);
    const righeReel = Math.floor(Math.random() * 5);

    this.updateReels(leftReel, middleReel, righeReel);

    const winCondition = leftReel === middleReel && middleReel === righeReel;
    if (winCondition) {
      this.coins += middleReel;
      this.wins++;
      this.coinsWon += middleReel
      document.getElementById('message')
        .textContent = `Congratulations!!! You won ${this.coins -1} coins!!`;
      this.coins = 0;
    } else {
      document.getElementById('message')
        .textContent = "Good luck next time!!";
      this.losses++;
      this.coinsLost += 1;
      this.coinsWon += (winCondition ? middleReel : -1);
      this.coins = 0;
    }

    this.updateStats();
  }

  updateReels(r1, r2, r3) {
    const leftReel = document.getElementById('leftReel');
    const middleReel = document.getElementById('middleReel');
    const righeReel = document.getElementById('righeReel');

    leftReel.textContent = r1;
    middleReel.textContent = r2;
    righeReel.textContent = r3;

    leftReel.classList.add('spin');
    middleReel.classList.add('spin');
    righeReel.classList.add('spin');

    setTimeout(() => {
      leftReel.classList.remove('spin');
      middleReel.classList.remove('spin');
      righeReel.classList.remove('spin');
    }, 1000);
  }

  updateStats() {
    document.getElementById('totalPlays').textContent = this.totalPlays;
    document.getElementById('wins').textContent = this.wins;
    document.getElementById('losses').textContent = this.losses;
    document.getElementById('coinsLost').textContent = this.coinsLost;
    document.getElementById('coinsWon').textContent = this.coinsWon;
  }
}

const machine = new SlotMachine();

document.getElementById('playButton').addEventListener('click', () => {
  machine.play();
});