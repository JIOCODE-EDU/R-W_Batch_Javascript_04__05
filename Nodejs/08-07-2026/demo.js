let str = "DOg is very cute but dog is danger. and cat is very beautiful but Cat is also dangers!!"

let regex = /Dog/gi

let result = str.replaceAll(regex , 'DOG')

console.log(result)