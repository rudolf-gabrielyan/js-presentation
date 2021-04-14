// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log('has john', visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log('has mary', visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически