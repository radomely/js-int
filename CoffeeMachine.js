function CoffeeMachine(power) {
  this.waterAmount = 0; // количество воды в кофеварке

  alert("Создана кофеварка мощностью: " + power + " ватт");
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;
