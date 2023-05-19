var countBits = function(n) {
    let binary = Number(n).toString(2)
    const r = binary.split('').reduce((acc, item) => {
        return + acc + + item;
    })
    return +r;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
