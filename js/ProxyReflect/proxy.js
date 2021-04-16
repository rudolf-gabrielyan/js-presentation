// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     _secret: '12456789'
// }

// const handler = {
//     get(target, property) {
//         console.log(`Property ${property} has been read.`);
//         return target[property];
//     },
//     set(target, property, value) {
//         if (property === 'age') {
//             if (typeof value !== 'number') {
//                 throw new Error('Age must be a number.');
//             }
//             if (value < 18) {
//                 throw new Error('The user must be 18 or older.')
//             }
//         }
//         target[property] = value;
//     },
//     has(target, key) {
//         if (key[0] === '_') {
//           return false;
//         }
//         return key in target;
//     }
// }

// const proxyUser = new Proxy(user, handler);

// proxyUser.age = 20;
// console.log('email' in proxyUser);
// console.log(proxyUser.email);

/////////////////////////////////////////////////////////////////////////////////

// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// const getFullName = function (user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// const handler = {
//     apply(target, thisArg, args) {
//         return target(...args).toUpperCase();
//     }
// }

// const getFullNameProxy = new Proxy(getFullName, handler);

// console.log(getFullNameProxy(user)); 

/////////////////////////////////////////////////////////////////////////////////////

// function monster1(disposition) {
//     this.disposition = disposition;
// }
  
// const handler1 = {
//     construct(target, args) {
//       console.log('monster1 constructor called');
//       // expected output: "monster1 constructor called"
  
//       return new target(...args);
//     }
// };
  
// const proxy1 = new Proxy(monster1, handler1);
  
// console.log(new proxy1('fierce').disposition);

//////////////////////////////////////////////////////////////////////////////////////////
// handler.get
// handler.set
// handler.has
// handler.apply
// handler.construct
// handler.ownKeys
// handler.deleteProperty
// handler.defineProperty
// handler.isExtensible
// handler.preventExtensions
// handler.getPrototypeOf
// handler.setPrototypeOf
// handler.getOwnPropertyDescriptor

// the url for handlers: https://blog.bitsrc.io/a-practical-guide-to-es6-proxy-229079c3c2f0