const sumAll = (int1, int2) => {
    let sum = 0;
    for (let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(1, 10));