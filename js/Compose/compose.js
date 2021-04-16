const USER = {
    id: 100,
    createdAt: '2019-01-01',
    updatedAt: '2019-01-01',
    is_active: true,
    is_subscriber: true,
    type: 1
}

const removeUnusedFields = (user) => {
    return {
        id: user.id,
        is_active: user.is_active,
        is_subscriber: user.is_subscriber,
        type: user.type
    }
}

const capitalizeFields = (user) => {
    return {
        id: user.id,
        type: user.type,
        isActive: user.is_active,
        isSubscriber: user.is_subscriber
    }
}

const normalizeType = (user) => {
    return {
        ...user,
        type: user.type === 1 ? 'member' : 'admin'
    }
}

const sanitizeUser = (user) => {
    return normalizeType(capitalizeFields(removeUnusedFields(user)))
}

console.log(sanitizeUser(USER));

// const compose = (...funcs) => {
//     if (funcs.length === 0) {
//         return arg => arg;
//     }
  
//     if (funcs.length === 1) {
//         return funcs[0];
//     }
  
//     return funcs.reduce((acc, hertakan) => {
//         return (...args) => {
//             const fRes = hertakan(...args);
//             console.log(fRes);
//             return acc(fRes);
//         }
//     })
// }

// const _sanitizeUserComposed = compose(normalizeType, capitalizeFields, removeUnusedFields)
// console.log(_sanitizeUserComposed(USER));