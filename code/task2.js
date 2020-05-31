const fp = require('lodash/fp');
const {Maybe, Container} = require('./support')

// practice 1
let maybe = Maybe.of([5,6,1])
let ex1 = function (arr, num) {
  return fp.map (
    function(x) { 
      return fp.add(x,num) 
    }, arr._value )
}

console.log(ex1(maybe, 2));

// practice 2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2  = function (arr){
  return fp.first(arr._value)
}

console.log(ex2(xs));

// practice 3
let safeProp = fp.curry(function (x, o){
  return Maybe.of(o[x])
})
// fp.first user 名字的首字母

let user = {id:2, name: 'Albert'}

let ex3 = function(obj){
  let arr = safeProp('name', obj)
  return fp.first(arr._value)
}

console.log(ex3(user));

// practice 4
let ex4 = function (n){
  let r = Maybe.of(n)
    .map(x => parseInt(x))
    ._value;
  return r
}

console.log(ex4('1'), 'ex4');
console.log(ex4('a'), 'ex4');
