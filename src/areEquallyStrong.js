function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft === friendsLeft && yourRight === friendsRight) || (yourLeft === friendsRight && yourRight === friendsLeft);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test areEquallyStrong
