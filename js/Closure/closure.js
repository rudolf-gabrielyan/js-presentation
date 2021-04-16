// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// };

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

///////////////////////////////////////////////////////////////////////////////////

// const categories = {
//     cars: {
//         bmw: {
//             3: "bmw_something",
//             5: "bmw_something",
//             6: "bmw_something"
//         },
//         mercedes: {
//             3: "mercedes_something",
//             5: "mercedes_something",
//             6: "mercedes_something"
//         }
//     },
//     food: {

//     },
//     dress: {

//     }
// }

// function categoryClosure(categories, category) {
//     const currentCategory = categories[category];
//     return function(item) {
//         return currentCategory[item]
//     }
// }

// const cars = categoryClosure(categories, 'cars');
// console.log(cars('bmw'));
// console.log(cars('mercedes'));
