console.group('Data types')
console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 1n); // -2^53 < "bigint" > 2^53

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol()); // "symbol"

console.log(typeof {}); // "object"

console.log(typeof null) // "object"  (1)

console.log(typeof function(){}) // "function"  (2)
console.groupEnd

//Symbol data type

let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1, id2)

// let idA = Symbol('id');
// alert(idA); // TypeError: Cannot convert a Symbol value to a string


// let idB = Symbol("id");
// alert(idB.toString()); // Symbol(id), теперь работает


// let idC = Symbol("id");
// alert(idC.description); // id


// let user = {
//     name: "Вася"
// };
// let id = Symbol("id");
// user[id] = 1;
// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу


// let user = { name: "Вася" };
// Объявляем в нашем скрипте свойство "id"
// user.id = "Наш идентификатор";
// ...другой скрипт тоже хочет свой идентификатор...
// user.id = "Их идентификатор"
// Ой! Свойство перезаписано сторонней библиотекой!


// let id = Symbol("id");
// let user = {
//     name: "Rudolf",
//     age: 20,
//     [id]: 123456789
// };

// for (let key in user) alert(key);

// let clone = Object.assign({}, user);
// let clone = { ...user };
// alert(user[id])


//Global Symboles

// let id = Symbol.for("id");
// let idAgain = Symbol.for("id");
// alert( id === idAgain ); // true

// alert(Symbol.keyFor(idAgain))
// alert(id.description)
