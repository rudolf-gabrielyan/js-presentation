//for the simple oject 
// let john = { name: "John" };

// const array = [ john ];

// john = null; 


// for the Map
// let john = { name: "John" };

// let map = new Map();
// map.set(john, "The first member");

// john = null;


//for the WeakMap
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)
// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "The first member");

// john = null;






//caching example  with map

// 📁 cache.js
// let cache = new Map();

// // вычисляем и запоминаем результат
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* тут какие-то вычисления результата для объекта */ obj;

//     cache.set(obj, result);
//   }

//   return cache.get(obj);
// }

// // Теперь используем process() в другом файле:

// // 📁 main.js
// let obj = {/* допустим, у нас есть какой-то объект */};

// let result1 = process(obj); // вычислен результат

// // ...позже, из другого места в коде...
// let result2 = process(obj); // ранее вычисленный результат взят из кеша

// // ...позже, когда объект больше не нужен:
// obj = null;

// alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)





//caching example with WeakMap 

// // 📁 cache.js
// let cache = new WeakMap();

// // вычисляем и запоминаем результат
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* вычисляем результат для объекта */ obj;

//     cache.set(obj, result);
//   }

//   return cache.get(obj);
// }

// // 📁 main.js
// let obj = {/* какой-то объект */};

// let result1 = process(obj);
// let result2 = process(obj);

// // ...позже, когда объект больше не нужен:
// obj = null;

// // Нет возможности получить cache.size, так как это WeakMap,
// // но он равен 0 или скоро будет равен 0
// // Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются
