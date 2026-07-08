function add(a , b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    console.log('Both arguments must be numbers');
    return NaN;
  }
  return a + b;
}

console.log(add('10' , 20));
