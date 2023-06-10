function binarySearch(list, item) {
    let low = 0,
        high = list.length - 1,
        counter = 0;

    while (low <= high) {
        counter++;
        let mid = Math.round((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            console.log('counter', counter);
            return mid;
        }
        else if (guess > item) high = mid - 1;
        else if (guess < item) low = mid + 1;
    }

    return null
}

let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i)
}
// arr = [1,2,3,5,6, 10, 77, 100]
console.log(binarySearch(arr, 200))
// console.log()
