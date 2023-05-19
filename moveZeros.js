function moveZeros(arr) {
    if (!arr.includes(0)) return arr;
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++
            arr.splice(i,1)
            i--
        }

    }
    for (let i = 0;i < count; i++){
        arr.push(0)
    }

    return arr;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
