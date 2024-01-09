class Player {
    constructor(name) {
      this.name = name;
      this.inventory = [];
    }
  
    addItem(item) {
      this.inventory.push(item);
    }
  }
  
  function createPlayer() {
    const playerName = 'Player'; // You can customize the player name
    return new Player(playerName);
  }
  
  module.exports = {
    Player,
    createPlayer,
  };
  