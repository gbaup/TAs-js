const getSum = (arr) => {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log(getSum([1, 2, 3, 4, 5]))