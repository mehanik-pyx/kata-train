const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    let sum = begin, currentPos = begin;
    while (currentPos<end) {
        currentPos+=step
        if (currentPos > end) return sum
        sum+=currentPos
    }
    return sum
};

console.log(sequenceSum(2,2,2))  //   --> 2
console.log(sequenceSum(2,6,2))  //   --> 12 (2 + 4 + 6)
console.log(sequenceSum(1,5,1))  //   --> 15 (1 + 2 + 3 + 4 + 5)
console.log(sequenceSum(1,5,3))  //    --> 5 (1 + 4)
