const player = require('./player');
const rooms = require('./rooms');

class Game {
  constructor() {
    this.player = player.createPlayer();
    this.currentRoom = rooms.getStartingRoom();
  }

  start() {
    console.log('Welcome to the Adventure Game!');
    this.displayCurrentRoom();
    this.promptUser();
  }

  displayCurrentRoom() {
    console.log(`You are in ${this.currentRoom.name}.`);
    console.log(this.currentRoom.description);
  }

  promptUser() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('What do you want to do? ', (answer) => {
      this.handleUserInput(answer);
      rl.close();
    });
  }

  handleUserInput(answer) {
    // Simple command processing
    switch (answer.toLowerCase()) {
      case 'look':
        this.displayCurrentRoom();
        break;
      case 'exit':
        console.log('Thanks for playing!');
        process.exit(0);
        break;
      case 'go north':
      case 'go south':
      case 'go east':
      case 'go west':
        this.move(answer.split(' ')[1]);
        break;
      default:
        console.log('Invalid command. Type "look" to see the room again or "exit" to quit.');
        break;
    }

    // Continue the loop
    this.promptUser();
  }

  move(direction) {
    const nextRoom = this.currentRoom.connections[direction];
    if (nextRoom) {
      this.currentRoom = nextRoom;
      console.log(`You move to the ${direction}.`);
      this.displayCurrentRoom();
    } else {
      console.log(`You cannot go ${direction}.`);
    }
  }
}

module.exports = Game;


