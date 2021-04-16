// const user = {
//     name: "Rudolf",
//     surname: "Gabrielyan",
//     age: 20,
//     getFullName(name) {
//         console.log( `Hi ${name} my name is ${this.name} ${this.surname}` );
//     }
// }

// console.log(Reflect.get(user, 'name'));
// Reflect.set(user, 'age', 30);
// console.log(Reflect.get(user, 'age'));
// console.log(Reflect.has(user, 'name'));
// console.log(Reflect.ownKeys(user));
// Reflect.apply(user.getFullName, user, ['Vahe'])
// Reflect.defineProperty(user, 'gender', { value: 'male' });
// console.log(Reflect.get(user, 'gender'));

// apply()
// construct()
// defineProperty()
// deleteProperty()
// get()
// getOwnPropertyDescriptor()
// getPrototypeOf()
// has()
// isExtensible()
// ownKeys()
// preventExtensions()
// set()
// setPrototypeOf()

//////////////////////////////////////////////////////////////////////////////////

const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    getFullName() {
        console.log( `Hi my name is ${this.name} ${this.surname}` );
    },
}

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return Reflect.get(...arguments)
    },
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age must be a number.');
            }
            if (value < 18) {
                throw new Error('The user must be 18 or older.')
            }
        }
        Reflect.set(...arguments);
    },
    apply(target, thisArg, args) {
        console.log('applying the function');
        Reflect.apply(...arguments)
    }
}

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.firstName);
proxyUser.age = 20;
console.log(proxyUser.age);
// proxyUser.getFullName();