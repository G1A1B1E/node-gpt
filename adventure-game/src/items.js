class Item {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  }
  
  const items = {
    key: new Item('Key', 'A shiny golden key.'),
    map: new Item('Map', 'A detailed map of the game world.'),
    // Add more items as needed
  };
  
  module.exports = items;
  