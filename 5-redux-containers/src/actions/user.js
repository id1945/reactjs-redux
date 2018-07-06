export function addUser(user) {
    return {
        type: 'ADD',
        user: user
    }
}

export function removeUser(user) {
    return {
        type: 'REMOVE',
        user: user
    }
}