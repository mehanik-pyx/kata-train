function yack(fn, ...parameters) {
    if (parameters.length >= fn.length) {
        return fn(...parameters);
    } else {
        return function (...args) {
            return yack(fn, ...parameters, ...args);
        };
    }
}
