function add (a, b, c) {
    return a + b + c;
}

function yack (fn) {
    return function inner(...args1) {
        if (fn.length === args1.length) {
            return fn(...args1)
        }
        return function(...args2) {
            return inner(...args1, ...args2)
        }
    }
}

console.log(yack((yack(add)))(1)(2)(3))

// (yack(yack(add))(1,2,3), 6);
