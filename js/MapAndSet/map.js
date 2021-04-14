// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

const user = new Map();

// const phone = {
//     number: '077586188',
//     code: '+374'
// }

// const phoneClone = {
//     number: '077586188',
//     code: '+374'
// }

user.set('name', 'Rudolf');
user.set('surname', 'Gabrielyan');
// user.set(phone, 'Armenia');
user.set(1, '1 as number');
user.set('1', '1 as string');

// console.group('get function')
// console.log(user.get('name'));
// console.log(user.get('surname'));
// console.log(user.get(phone));
// console.log(user.get(1));
// console.log(user.get('1'));
// // console.log(user.get(phoneClone));
// console.groupEnd()

// console.group('has function')
// console.log(user.has('name'))
// console.groupEnd()

// console.group('size getter')
// console.log(user.size)
// console.groupEnd()

// console.group('key, value, entries')
// console.log(user.keys())
// console.log(user.values())
// console.log(user.entries())
// console.groupEnd()

//loops on Maps

// let cars = new Map([
//     ["BMW", 65000],
//     ["Mercedes", 40000],
//     ["Audi",    45000]
// ]);

// // перебор по ключам
// for (let car of cars.keys()) {
//     console.log(car);
// }

// // перебор по значениям (числа)
// for (let amount of cars.values()) {
//     console.log(amount);
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of cars) { // то же самое, что и recipeMap.entries()
//     console.log(entry);
// }

//Map from object

// let obj = {
//     name: "John",
//     age: 30
// };

// let map = new Map(Object.entries(obj));
// console.log(map);

//Object from Map

// let map = new Map([
//     ["BMW", 65000],
//     ["Mercedes", 40000],
//     ["Audi",    45000]
// ]);

// let obj = Object.fromEntries(map.entries());
// console.log(obj);

// the structute of Map, how it works
// class Map {
//     constructor() {
//         // initial fields
//     }

//     set(field, value) {
//         // set new value
//     }

//     get(field) {
//         // get the vaule
//     }

//     has(field) {
//         // return boolean value
//     }

//     delete(field) {
//         // delete field
//     }

//     clear() {
//         // empty all map
//     }

//     get size() {
//         // return map size
//     }
// }