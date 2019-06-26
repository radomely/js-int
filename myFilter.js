Array.prototype.myFilter = function myFilter(cb) {
  return this.reduce((acc, item, index, arr) => (
   cb(item, index, arr) 
      ? acc.concat(item)
      : acc;
  )
  , []);
};

[1,2,3,4].filter(function (item) { return item > 1 }); // [2, 3, 4]

const newArr = [1,2,3,4].myFilter(function (item) { return item > 1 }); // [2, 3, 4]

console.log(newArr);