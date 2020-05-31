const fp = require('lodash/fp');

// horsepower 马力 ，dollar_value 价格，in_stock 库存
const cars = [
  {
    name: "Ferrari FF", 
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
  },{
    name: "Spyker C12 Zagato", 
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
  },{
    name: "Jaguar XKR-S", 
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
  },{
    name: "Audi R8", 
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false
  },{
    name: "Aston Martin One-77", 
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
  },{
    name: "Pagani Huayra", 
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
  }
]

// practice 1
let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
console.log(isLastInStock(cars));

// practice 2
let firstName = fp.flowRight(fp.prop('name'),fp.first)
console.log(firstName(cars));

// practice 3
let _average = function(xs) {
  return fp.reduce(fp.add, 0, xs) / xs.length
}

let averageDollarVale = fp.flowRight(_average, fp.map(fp.prop('dollar_value')))
console.log(averageDollarVale(cars));

// practice 4
let _underscore = fp.replace(/\W+/g, '_')

let sanitizeNames = fp.flowRight(fp.map(fp.toLower), fp.map(_underscore), fp.map(fp.prop('name')))
console.log(sanitizeNames(cars));



