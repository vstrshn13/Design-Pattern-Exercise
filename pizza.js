
class Pizza {
  constructor(quantity) {
    this.quantity = quantity;
  }

  prepare() {}
  bake() {}
  cut() {}
  box() {}

  total() {
    return this.price * this.quantity;
  }
}

class CheesePizza extends Pizza {
  constructor(quantity) {
    super(quantity);
    this.price = 10.99;
  }

  prepare() {
    console.log("Preparing " + this.quantity + " cheese pizzas");
  }

  bake() {
    console.log("Baking " + this.quantity + " cheese pizzas");
  }

  cut() {
    console.log("Cutting " + this.quantity + " cheese pizzas");
  }

  box() {
    console.log("Boxing " + this.quantity + " cheese pizzas");
  }
}

class PepperoniPizza extends Pizza {
  constructor(quantity) {
    super(quantity);
    this.price = 12.99;
  }

  prepare() {
    console.log("Preparing " + this.quantity + " pepperoni pizzas");
  }

  bake() {
    console.log("Baking " + this.quantity + " pepperoni pizzas");
  }

  cut() {
    console.log("Cutting " + this.quantity + " pepperoni pizzas");
  }

  box() {
    console.log("Boxing " + this.quantity + " pepperoni pizzas");
  }
}

class PizzaFactory {
 //codehere

 createPizza(type, quantity){
    let pizza;

    if (type === "cheese"){
        pizza = new CheesePizza(quantity);
    } else if (type === "pepperoni"){
        pizza = new PepperoniPizza(quantity);
    }
    
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    console.log("Total cost for " + quantity + "  " + type + "pizzas: $" + pizza.total().toFixed(2));
 }
  }