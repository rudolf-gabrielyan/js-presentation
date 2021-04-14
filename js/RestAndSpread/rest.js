// const user = {
//     name: 'Rudolf',
//     surname: 'Gabrielyan',
//     age: 20,
//     gender: 'male'
// }


// const { name, surname, ...rest } = user;
// console.group('user details')
// console.log('name', user);
// console.log('surname', surname);
// console.log('rest', rest);
// console.groupEnd();


// const users = [ 'user1', 'user2', 'user3', 'user4', 'user5' ];
// const [ user1, user2, ...restUsers ] = users;
// console.group('users')
// console.log('user1', user1);
// console.log('user2', user2);
// console.log('rest users', restUsers);
// console.groupEnd();


// function restExample(...params) {
//     console.log('params', params);
//     // console.log('arguments', arguments);
// }

// restExample('1', 5, 'Rudolf', true)



//Summary -> rest and spread usage together
// const user = {
//     name: 'Rudolf',
//     surname: 'Gabrielyan',
//     permissions: ['add-new-item', 'edit-item', 'remove-item', 'review-others-items'],
//     can(...permissions) {
//         return permissions.some(permission => this.permissions.includes(permission));
//     },
//     canEvery(...permissions) {
//         return permissions.every(permission => this.permissions.includes(permission));
//     }
// };

// const neededPermissions = ['add-new-item', 'review-others-items', 'remove-friend-item'];

// const neededPermissionsAnyPermission = user.can(...neededPermissions);
// const neededPermissionsEveryPermission = user.canEvery(...neededPermissions);

// console.log('neededPermissionsAnyPermission', neededPermissionsAnyPermission);
// console.log('neededPermissionsEveryPermission', neededPermissionsEveryPermission);