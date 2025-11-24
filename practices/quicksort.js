//implementation of quicksort in js using lomuto partition
let arr = [1, 4, 3, 6, 7, 2, 2, 543, 56, 6];
quickSort(arr, arr.length - 1, 0);
console.log(arr.join(', '));

function quickSort(arr, up, low) {
    //console.log('hello');
    
    if (low < up) {
    let s = partition(arr, up, low);
    quickSort(arr, up, s + 1);
    quickSort(arr, s - 1, low);
    }
}

function partition(arr, up, low) {
    //console.log('hello');
    let partValue = arr[low];
    let part = low;
    for (let i = low + 1; i <= up; ++i) {
        if (arr[i] < partValue) {
            ++part;
            let temp = arr[part];
            arr[part] = arr[i];
            arr[i] = temp;
        }
    }
    arr[low] = arr[part];
    arr[part] = partValue;
    return part;
}