function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft === friendsLeft && yourRight === friendsRight) || (yourLeft === friendsRight && yourRight === friendsLeft);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test areEquallyStrong

// alternative solution
// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//     return yourLeft + yourRight === friendsLeft + friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
// }

// alternative solution
// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//     var me = [yourLeft, yourRight].sort().join('');
//     var friend = [friendsLeft, friendsRight].sort().join('');
//     return me === friend;
// }

// alternative solution
// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//     return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) && Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight);
// }
