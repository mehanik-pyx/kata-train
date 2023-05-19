function sum(a,b,c,d) {
    return a+b+c+d
}

// function curry (fn) {
//     return function inner(...args1) {
//         if (fn.length === args1.length) {
//             return fn(...args1)
//         }
//         return function(...args2) {
//             return inner(...args1, args2)
//         }
//     }
//
// }

function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

console.log(sum(1,2,3,4));
const CurrySum = curry(sum)

console.log(CurrySum(1)(2)(3)(4));
