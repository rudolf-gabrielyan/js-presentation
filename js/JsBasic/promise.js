const user1 = new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => resolve(response.json()))
    .catch(err => reject(err));
});

const user2 = new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => resolve(response.json()))
    .catch(err => reject(err));
});



// user1.then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err)
// })
// .finally(() => {
//     console.log('finally completed user1 request');
// })

// user2.then(res => {
//     console.log(res);
// })  
// .catch(err => {
//     console.error(err)
// })
// .finally(() => {
//     console.log('finally completed user2 request');
// })
// console.log('11111');


// const requests = [ user1, user2 ];

// Promise.all(requests).then(res => {
//     console.log(res);
// })

// Promise.any(requests).then(res => {
//     console.log(res);
// })

// Promise.race(requests).then(res => {
//     console.log(res);
// })

// Promise.allSettled(requests).then(res => {
//     console.log(res);
// })



