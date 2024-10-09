const arr = [1, 2, 3, 4, 5];

function recursiveIteration(array, index = 0) {
    console.log(array[index]);
    if (index < array.length - 1) {
        recursiveIteration(array, ++index);
    }
}

recursiveIteration(arr);
