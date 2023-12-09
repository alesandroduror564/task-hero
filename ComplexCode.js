/* 

Filename: ComplexCode.js

Description: This script implements a complex and creative text-based adventure game featuring multiple characters, interactive dialogues, inventory management, and dynamic gameplay.

Author: [Your Name]

*/

// Character class representing a character in the game
class Character {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.inventory = [];
    this.location = null;
  }

  move(location) {
    this.location = location;
    console.log(`${this.name} moved to ${location.name}.`);
  }

  take(item) {
    this.inventory.push(item);
    console.log(`${this.name} took ${item.name}.`);
  }

  use(item) {
    console.log(`${this.name} used ${item.name}.`);
  }
}

// Location class representing a location in the game world
class Location {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
    character.location = this;
    console.log(`${character.name} entered ${this.name}.`);
  }
}

// Item class representing an item that can be collected and used
class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  use() {
    console.log(`${this.name} used.`);
  }
}

// Creating characters, locations, and items
const player = new Character("Player", "The main character");
const npc = new Character("NPC", "A non-playable character");

const location1 = new Location("Location 1", "The starting point");
const location2 = new Location("Location 2", "A mystery location");
const location3 = new Location("Location 3", "An exciting destination");

const item1 = new Item("Item 1", "A powerful artifact");
const item2 = new Item("Item 2", "A mystical potion");

// Setting up relationships between characters and locations
location1.addCharacter(player);
location1.addCharacter(npc);
location2.addCharacter(npc);

player.take(item1);
npc.take(item2);
player.use(item1);
npc.use(item2);

// Main game loop
function main() {
  console.log("Welcome to the complex adventure game!");

  while (true) {
    const input = prompt("What do you want to do?");

    // Process user input and trigger corresponding actions
    if (input === "move") {
      const location = prompt("Where do you want to move?");
      player.move(location);
    } else if (input === "take") {
      const item = prompt("Which item do you want to take?");
      player.take(item);
    } else if (input === "use") {
      const item = prompt("Which item do you want to use?");
      player.use(item);
    } else if (input === "exit") {
      break;
    } else {
      console.log("Invalid command. Please try again.");
    }
  }

  console.log("Thank you for playing the complex adventure game!");
}

// Starting the game
main();