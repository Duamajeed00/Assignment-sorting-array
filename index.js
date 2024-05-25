function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const arr = [5, 2, 8, 3, 1, 6, 4];
console.log(bubbleSort(arr)); // [1, 2, 3, 4, 5, 6, 8]
export {};
// quicksort or mergesort for large datasets bcz bubblesort is less efficient as compare to these .
// how to sort array without using .sort built in method 
// ascending order 
// let arr = [12,27,18,19,9,78];
// let temp;
// for(let i=0; i < arr.length; i++){
//      for(let j=i; j<arr.length; j++){
//       if(arr[i]>arr[j]){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//      }
//  }
// console.log(arr)
// // // descending order 
// let arr = [12,27,18,19,9,78];
// let temp;
// for(let i=0; i < arr.length; i++){
//   console.log(`print I : ${arr[i]}`);
//      for(let j=0; j<arr.length; j++){
//       console.log(`print J : ${arr[j]}`);
//       if(arr[i]>arr[j]){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//      }
// }
// console.log(arr)
