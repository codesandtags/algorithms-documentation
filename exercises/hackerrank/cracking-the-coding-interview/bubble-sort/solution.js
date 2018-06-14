function bubbleSort(n) {
    let swaps = 0;
    let isSorted = false;

    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < n.length - 1; i++) {
            if (n[i] > n[i + 1]) {
                swap(n, i, i + 1);
                isSorted =  false;
                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${n[0]}`);
    console.log(`Last Element: ${n[n.length - 1]}`);
}

function swap(a, i, j) {
    const tmp =  a[i];
    a[i] = a[j];
    a[j] = tmp;
}


let nums = [5,4,3,2,1];
bubbleSort(nums);

nums = [1,3,2,5,4];
bubbleSort(nums);

nums = [1,2,3,4,5];
bubbleSort(nums);

