// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
// pseudocode
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.



// function selectionSort(arr){

// for ( var i= 0 ; i< arr.length ; i++){
//     var lowest = i;
//     for ( var j=i+1 ; j<arr.length ; j++){
//         if( arr[j] <arr[lowest]){
//             lowest = j;
//         }
//         // console.log(i,j)
//         if( i !== lowest){
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//     }
//  }
// }

//     return arr;
// }

// console.log(selectionSort([34,22,10,19,17]))

// the ES2015 version

function selectionSort(arr){
    const swap = (arr, idx1, idx2)=>
    ([arr[idx1], arr[idx2]] = [arr[idx2] , arr[idx1]]);
    for ( let i=0; i < arr.length ; i++){
        let lowest =i ;
        for ( let j=i+1 ; j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest = j;
            }
        }
        if( i!== lowest) swap (arr, i , lowest);
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]))


// big O , it is O(n^2)
//  we only make 1 swap at the end of each loop
// seleciton sort better than bubble sort

