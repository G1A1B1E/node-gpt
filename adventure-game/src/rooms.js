class Room {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  }
  
  const rooms = {
    startingRoom: new Room('Starting Room', 'You find yourself in a dimly lit room.'),
    nextRoom: new Room('Next Room', 'You enter a room with a mysterious aura.'),
    // Add more rooms and connections as needed
  };
  
  function getStartingRoom() {
    return rooms.startingRoom;
  }
  
  module.exports = {
    Room,
    rooms,
    getStartingRoom,
  };
  