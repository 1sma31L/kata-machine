export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] - arr[j + 1] > 0) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        console.log(arr);
    }
}
const arr = [1, 5, 7, 9, 3, 10, 15, 6];
console.log("first time", arr);
bubble_sort(arr);
console.log("last time : ", arr);
