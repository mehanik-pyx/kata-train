let arrayCounter = 1
snail = function(array) {
    console.log('arr'+arrayCounter+'-', array)
    arrayCounter++

    let n = array.length
    if (n === 1) {
        return array[0]
    }

    let counter = n*n
    console.log('counter-', counter)
    let res = []
    let row = 0

/*
    console.log(snail([
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40, 41, 42],
        [43, 44, 45, 46, 47, 48, 49]
    ]));
*/
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])

    while (counter > 0) {
        // res.push(...array[row])
        let temp = array[row].slice(row, n-row)
        res.push(...temp)
        counter -=temp.length
 // let a = [].slice()
        console.log(counter, res);
        for (let i = 1; i < n-row; i++) {
            res.push(...array[i][-i])
        }
        //counter -=

        let temp2 = array[n-row-1].slice(row, n-row-1).reverse()
        res.push(...temp2)
        counter -=temp2.length
        console.log(res);

        row++
    }

//   let res = [...array[0], array[1][array[1].length - 1]]
//   res = [...res, ...array[array.length-1].reverse()]
//   array[1].pop()
//   console.log('array[1]-', array[1])
//   res = [...res, ...array[1]]
  console.log('res-', res)
    return res
}

// snail([[1]]) // [1]
// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));
/*
console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]));
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])

console.log(snail([
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48, 49]
]));
*/
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])
