// console.log([2,1,3,1,2,2,2,2].reverse());
function pickPeaks(arr){
    console.log(arr);
    let pos = [], peaks = [], platoStart = null;

    for (let a = 0, b = 1, c = 2; c < arr.length; a++, b++, c++) {
        let itemA = arr[a], itemB = arr[b], itemC = arr[c];

        if ((itemA<itemB && itemB === itemC) && (platoStart === null || itemB > arr[platoStart])) { //нашли начало плато
            platoStart = b;
        }
        if (itemA < itemB && itemB > itemC) { // нашли пик
            pos.push(b)
            peaks.push(arr[b])
            platoStart = null;
        }
        if (itemA === itemB && itemB > itemC && !!platoStart) {  // нашли конец плато
            pos.push(platoStart)
            peaks.push(arr[platoStart])
            platoStart = null;
        }
    }
    return {pos,peaks}
}
console.log(pickPeaks([
    2, 2, 2, 2,
    1, 3, 1, 2
]      ));
//                                                 a   b   c


// expected { pos: [ 2, 5, 7, 10, 12, 15, 18, 23, 26, 30, 33, 37, 39, 45 ], peaks: [ 9, 5, 3, 14, 14, 6, 15, 10, 14, 11, 7, 10, 13, 7 ] } to deeply equal
//          { pos: [ 2, 5, 7, 10, 12, 15, 18, 23, 26, 30, 33, 37, 41, 45 ], peaks: [ 9, 5, 3, 14, 14, 6, 15, 10, 14, 11, 7, 10, 15, 7 ] }
// expected { pos: [ 1, 4 ], peaks: [ 8, 11 ] } to deeply equal { pos: [ 1, 7 ], peaks: [ 8, 15 ] }
// console.log(pickPeaks([3,  8,  6,  3, 11, 11, 14, 15, 15,  5]));

// console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
// console.log(pickPeaks([2,1,3,1,2,2,2,2]));
// console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]));
// expected { pos: [ 2, null ], peaks: [ 3, undefined ] } to deeply equal { pos: [ 2 ], peaks: [ 3 ] }
//                              a  b  c

// assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
// assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});


/*
if (arr[a] < arr[b] && arr[b] === arr[c]) {
    platoStart = b
    console.log(platoStart, b);
}
if (arr[a] < arr[b] && arr[b] > arr[c]) {
    pos.push(b)
    peaks.push(arr[b])
}*/
// if (arr[a] === arr[b]) {
// }

// нужно найти каждую точку слева и справа от которой будет значение меньше
