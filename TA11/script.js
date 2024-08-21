const getDuplicates = (arr) => {
    const duplicates = [];
    arr.forEach((item, index) => {
        if (arr.indexOf(item, index + 1) > -1) {
            if (duplicates.indexOf(item) === -1) {
                duplicates.push(item);
            }
        }
    });
    return duplicates.length;
}

console.log(getDuplicates([1, 2, 2, 3, 4, 4, 4, 5]))
