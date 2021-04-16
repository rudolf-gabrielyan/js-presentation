// function makeIterator(array){
//     let nextIndex = 0;

//     return {
//        next: function(){
//            return nextIndex < array.length ?
//                 {
//                    value: array[nextIndex++], 
//                    done: false
//                 } 
//                 :
//                 { 
//                     value: undefined,
//                     done: true 
//                 };
//        }
//     }
// }

// var it = makeIterator(['yo', 'ya']);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());



// let interatorArray = ['Rudolf', 20, 'Grno', true, 'false'];
// interatorArray = interatorArray[Symbol.iterator]();

// console.log(interatorArray.next());
// console.log(interatorArray.next());
// console.log(interatorArray.next());
// console.log(interatorArray.next());
// console.log(interatorArray.next());
// console.log(interatorArray.next());



// let interatorString = 'Hello team jan!';
// interatorString = interatorString[Symbol.iterator]();

// console.log(interatorString.next());
// console.log(interatorString.next());
// console.log(interatorString.next());
// console.log(interatorString.next());
// console.log(interatorString.next());
// console.log(interatorString.next());


// const arr = [1, 2, 5];
// const str = 'hello';

// for(it of arr) {
//     console.log(it);
// }

// for(it of str) {
//     console.log(it);
// }


// An iterable object is any object that has a Symbol.iterator property whose value is a function that returns an Iterable.
// You can loop over all values in an iterable object by using a for (const value of iterable) { } loop.
// You may create your own iterable object by assigning the Symbol.iterator property to a generator function (function* () {}) or an object with a next() method.

// const iterable = {
//     [Symbol.iterator]() {
//       return {
//         i: 0,
//         next() {

//           if (this.i < 5) {

//             return { value: this.i++, done: false };

//           }

//           return { value: undefined, done: true };
//         }
//       };
//     }
// };
  
// for (var value of iterable) {
//     console.log(value);
// }