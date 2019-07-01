class Hamburger {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  /**
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    }
    return this._toppings;
  }

  /**
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    if (this._toppings.includes(topping)) {
      this._toppings = this._toppings.filter(el => el != topping);
    }
    return this._toppings;
  }

  /**
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   */
  get toppings() {
    return this._toppings;
  }

  /**
   * @returns {String} - размер гамбургера
   */
  get size() {
    return this._size;
  }

  /**
   * @returns {String} - начинка гамбургера
   */
  get stuffing() {
    return this._stuffing;
  }

  /**
   * @returns {Number} - Цена в деньгах
   */
  get total() {
    let prices = [];
    if (this._size === "SIZE_SMALL") {
      prices.push(Hamburger.SIZES[Hamburger.SIZE_SMALL]["price"]);
    } else if (this._size === "SIZE_LARGE") {
      prices.push(Hamburger.SIZES[Hamburger.SIZE_LARGE]["price"]);
    }
    if (this._stuffing === "STUFFING_CHEESE") {
      prices.push(Hamburger.STUFFINGS[Hamburger.STUFFING_CHEESE]["price"]);
    } else if (this._stuffing === "STUFFING_SALAD") {
      prices.push(Hamburger.STUFFINGS[Hamburger.STUFFING_SALAD]["price"]);
    } else if (this._stuffing === "STUFFING_MEAT") {
      prices.push(Hamburger.STUFFINGS[Hamburger.STUFFING_MEAT]["price"]);
    }
    if (this._toppings.includes("TOPPING_SPICE")) {
      prices.push(Hamburger.TOPPINGS[Hamburger.TOPPING_SPICE]["price"]);
    }
    if (this._toppings.includes("TOPPING_SAUCE")) {
      prices.push(Hamburger.TOPPINGS[Hamburger.TOPPING_SAUCE]["price"]);
    }
    const total = prices.reduce((acc, price) => acc + price, 0);
    return total;
  }

  /**
   * @returns {Number} - Калорийность в калориях
   */
  get calories() {
    let listOfCalories = [];
    if (this._size === "SIZE_SMALL") {
      listOfCalories.push(Hamburger.SIZES[Hamburger.SIZE_SMALL]["calories"]);
    } else if (this._size === "SIZE_LARGE") {
      listOfCalories.push(Hamburger.SIZES[Hamburger.SIZE_LARGE]["calories"]);
    }
    if (this._stuffing === "STUFFING_CHEESE") {
      listOfCalories.push(
        Hamburger.STUFFINGS[Hamburger.STUFFING_CHEESE]["calories"]
      );
    } else if (this._stuffing === "STUFFING_SALAD") {
      listOfCalories.push(
        Hamburger.STUFFINGS[Hamburger.STUFFING_SALAD]["calories"]
      );
    } else if (this._stuffing === "STUFFING_MEAT") {
      listOfCalories.push(
        Hamburger.STUFFINGS[Hamburger.STUFFING_MEAT]["calories"]
      );
    }
    if (this._toppings.includes("TOPPING_SPICE")) {
      listOfCalories.push(
        Hamburger.TOPPINGS[Hamburger.TOPPING_SPICE]["calories"]
      );
    }
    if (this._toppings.includes("TOPPING_SAUCE")) {
      listOfCalories.push(
        Hamburger.TOPPINGS[Hamburger.TOPPING_SAUCE]["calories"]
      );
    }
    const calories = listOfCalories.reduce((acc, price) => acc + price, 0);
    return calories;
  }
}

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100
  }
};

Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15
  }
};

Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5
  }
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Price: ", hamburger.total);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.total);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1
console.log(hamburger.toppings);
