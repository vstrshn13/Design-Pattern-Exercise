class Burger {
    constructor(components) {
      this.bun = components.bun;
      this.patty = components.patty;
      this.cheese = components.cheese;
      this.sauce = components.sauce;
      this.toppings = components.toppings;
      this.price = components.price;
    }
  
    describe() {
      console.log(`Burger with ${this.patty} patty\nCheese: ${this.cheese}\nSauce: ${this.sauce}\nToppings: ${this.toppings.join(", ")}\nBun Type: ${this.bun} bun\nTotal cost: $${this.price}`);
    }
  }
  
  class BurgerMachine {
    constructor() {
      this.bun = "regular";
      this.patty = "beef";
      this.cheese = false;
      this.sauce = "ketchup";
      this.toppings = [];
      this.price = 7;
    }

withBun(bun, price) {
    this.bun = bun;
    this.price += price;
    return this;

   }
 
   withPatty(patty, price) {
    this.patty = patty;
    this.price += price
    return this;

   }
 
   withCheese(cheese, price) {
    this.cheese = cheese;
    this.price += price;
    return this;  
 }
 
   withSauce(sauce, price) {
    this.sauce = sauce;
    this.price += price;
    return this;  
 }
 
   withToppings(toppings, price) {
    this.toppings = toppings;
    this.price += toppings.length * price;
    return this;  
 }
 
   create() {
     return new Burger(this);
   }
 }