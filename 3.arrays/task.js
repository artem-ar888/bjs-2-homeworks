"use strict"

function compareArrays(arr1, arr2) {
    if (!(Array.isArray(arr1) && Array.isArray(arr2) && (arr1.length === arr2.length))) {
        return false;
    }
    return arr1.every((item, index) => item === arr2[index]);  
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).reduce((acc, user, index, arr) => {
        acc += user.age;
        if (index === arr.length -1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return result;
}