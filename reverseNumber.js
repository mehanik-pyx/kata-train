function reverseNumber(n){
    let isNegative = false, res=[]
    if (n[0] === '-') {
        isNegative = true
        n = n.substring(1)
    }

    let start=0, direction =null;
    for (let i =1;n.length>i;i++){
        let itemA = n[i - 1];
        let itemB = n[i];

        if (direction === null && itemA < itemB) direction = 'asc'
        if (direction === null && itemA > itemB) direction = 'desc'

        if ((direction === 'asc' && itemA > itemB) || (direction === 'desc' && itemA < itemB)) {
            res.push(n.substring(start,i).split('').reverse().join(''))
            start = i
            direction = null
        }
    }

    res.push(n.substring(start).split('').reverse().join(''))
    res = res.join('')
    while (res[0] === '0') res = res.substring(1)
    if (isNegative) res = '-'+res
    return res
}


const temp = reverseNumber('-520009067815868079677501805063264427988149853')
console.log(temp)
