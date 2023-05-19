let counter = 0;

function yack(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    } else {
        return function (...args2) {
            return yack(fn, ...args, ...args2);
        };
    }
}

function yack2(fn, ...parameters) {
    if (parameters.length >= fn.length) {
        return fn(...parameters);
    } else {
        return function (...args) {
            return yack2(fn, ...parameters, ...args);
        };
    }
}

// ----------------------------------

function add(a, b, c) {
    return a + b + c;
}

console.log(yack(yack(add)(1)(2)(3, 4, 5)));
// console.log(yack(add)(1)()()()(2)(3))
// console.log(yack(yack(add))(1)(2)(3))
// console.log(yack(yack(yack(add)(1)))(2)(3))


// function yack(fn, ...args) {
//     // counter++;
//     // console.log(counter);
//     // console.log(fn);
//     // console.log(fn.length);
//     return function curried(fn, ...args1) {
//         const args3 = [...args1, ...args];
//         if (args3.length >= fn.length) {
//             const a = fn(...args3);
//             return a;
//         } else {
//             return function (...args2) {
//                 const b = curried(fn, ...args3, ...args2);
//                 return b;
//             };
//         }
//     };
// }

// function yack(fn, ...args) {
// //   console.log(''+fn)
//     console.log(args)
//     if (!!fn.length) {
//         return function curried(...args1) {
//             const args3 = [...args1, ...args]
//             if (args3.length >= fn.length) {
//                 const a = fn(...args3)
//                 return a;
//             } else {
//                 return function(...args2) {
//                     const b = curried(...args3, ...args2)
//                     return b;
//                 }
//             }
//         };
//     } else {
//         return fn
//     }
// }
