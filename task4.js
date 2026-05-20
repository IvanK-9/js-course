class Flower {
  constructor(type, color, amount, inStore) {
    this.Type = type;
    this.Color = color;
    this.Amount = amount;
    this.inStore = inStore ? "Yes" : "No";
  }

  changeAmount(newAmount) {
    this.Amount = newAmount;
  }

  changeColor(newColor) {
    this.Color = newColor;
  }

  changeInStore(newInStore) {
    this.inStore = newInStore ? "Yes" : "No";
  }

  toString() {
    return `Flower { Type: '${this.Type}', Color: '${this.Color}', Amount: ${this.Amount}, inStore: ${this.inStore} }`;
  }
}

// Create flower instance
const myFlower = new Flower("Rose", "Red", 5, true);
console.log("1) after created: " + myFlower.toString());

// Change properties
myFlower.changeColor("Yellow");
myFlower.changeAmount(3);
myFlower.changeInStore(false);
console.log("2) after changed: " + myFlower.toString());
