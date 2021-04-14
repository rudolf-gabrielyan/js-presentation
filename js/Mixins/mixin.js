// // mixin, imported from somwhere
// const sayHiMixin = {
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// };

// // usage:
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // now User can say hi
// const user = new User("Dude");
// console.log(user);
// user.sayHi(); // Hello Dude!

//////////////////////////////////////////////////////////////////////

// const sayMixin = {
//     say(phrase) {
//         console.log(phrase);
//     }
// };

// let sayHiMixin = {
//     __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

//     sayHi() {
//         // call parent method
//         super.say(`Hello ${this.name}`); // (*)
//     },
//     sayBye() {
//         super.say(`Bye ${this.name}`); // (*)
//     }
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // now User can say hi
// const user =  new User("Dude");
// user.sayHi(); // Hello Dude!
