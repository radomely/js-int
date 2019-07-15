const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};
const order = {
  bread: 2,
  milk: 3,
  apples: 1,
  cheese: 4
};

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  let total = 0;
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
    return value;
  };
  this.countTotalPrice = function(order) {
    for (let item of Object.keys(order)) {
      let price = order[item] * products[item];
      total += price;
    }
    return total;
  };
  this.countChange = function() {
    if (this.customerMoney >= total) {
      let change = this.customerMoney - total;
      return change;
    } else {
      return null;
    }
  };
  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };
  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };
  this.reset = function() {
    this.customerMoney = 0;
    return this.customerMoney;
  };
}

const mango = new Cashier("Mango", products);
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice); // 245!

mango.getCustomerMoney(300);
// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

const change = mango.countChange();
// Проверяем что нам вернул countChange
console.log(change); // 55

if (change !== null) {
  mango.onSuccess(change);
} else {
  mango.onError();
}

mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0
