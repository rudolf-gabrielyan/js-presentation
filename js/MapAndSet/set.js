// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

let set = new Set();

let user1 = { name: "Rudolf" };
let user2 = { name: "Grno" };
let user3 = { name: "Vaxo" };

// считаем гостей, некоторые приходят несколько раз
set.add(user1);
set.add(user2);
set.add(user3);
set.add(user1);
set.add(user3);

// set хранит только 3 уникальных значения
// console.log('size :', set.size); // 3

// console.group('Users')
// for (let user of set) {
//   console.log(user.name);
// }
// console.groupEnd()

// another case of delcaration
// let fruits = new Set(["tandz", "xndzor", "mandarin"]);

// console.group('fruits: loop -> for of')
// for (let value of fruits) console.log(value);;
// console.groupEnd()

// console.group('fruits: loop -> foreach')
// fruits.forEach((value, valueAgain, fruits) => {
//   console.log(value);
// });
// console.groupEnd()

//trick -> remove all dublicated items from an array by using new Set
// let arr = [1, 1, 1, 5, 6, 5, 1, 9, 9];
// arr = [...new Set(arr)];
// console.log('removed dublicates', arr);