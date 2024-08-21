const removeFromArray = function (array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3))