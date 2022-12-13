let arr1 = [3, 'a', 3, 3, 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const move = (arr, index1, index2) => {
    let temp1
    if (index1 < 0) {
        temp1 = arr[arr.length + index1]
    } else {
        temp1 = arr[index1]
    }
    if (index2 < 0) {
        index2 = arr.length + index2
    }
    arr.splice(index1, 1)
    arr.splice(index2, 0, temp1)
    return arr
}

const frequent = (arr) => {
    let max = 1;
    let count = 0;
    let element;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                if (max < count) {
                    max = count;
                    element = arr[i];
                }
            }
        }
        count = 0
    }
    return (element + " is occuring " + (max + 1) + " times")
}

console.log(frequent(arr1))
console.log(move([10, 20, 30, 40, 50], 4, 2));
console.log(move([10, 20, 30, 40, 50], -2, -3));