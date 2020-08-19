// bubble sort
// A sorting algorithm where the largest values bubble up to the top!//


// pseudocode
// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// VISUAlGO
// swap with next one, then swap again 

// It is also called syncing sort

// function bubbleSort(arr){
//     for(var i=0 ; i<arr.length ; i++){
//         for ( var j=0 ; j<arr.length ; j++){
//             // we are going too long , because we got undefined
//             // keeps checking 37 and 45
//             // we need to fix that
//             // console.log(arr,arr[j],arr[j+1])
//            if  (arr[j] > arr[j+1]){
//             //    Swap!
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//            }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([37,45,29,8]))



// ES5 using temp
// function bubbleSort(arr){
//     for(var i=arr.length ; i>0 ; i--){
//         for ( var j=0 ; j<i-1 ; j++){
//               console.log(arr,arr[j],arr[j+1])

//            if  (arr[j] > arr[j+1]){
//             //    Swap!
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//            }
//         }
//         console.log("One Pass complete!")
//     }
//     return arr
// }
// console.log(bubbleSort([37,45,29,8]))
// console.log(bubbleSort([37,45,29,8,12,88,-3]))


// ES2015 using arr[idx] etc
// function bubbleSort(arr){
//     const swap = (arr,idx1,idx2) =>{
//         [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
//     };
//     for(let i = arr.length ; i>0 ; i--){
//         for (let j=0 ; j<i-1 ;j++){
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([37,45,29,8]))


// optimized with No Swaps
function bubbleSort(arr){
    var noSwaps;
    for(var i=arr.length ; i>0 ; i--){
        noSwaps =true;
        for ( var j=0 ; j<i-1 ; j++){
              console.log(arr,arr[j],arr[j+1])

           if  (arr[j] > arr[j+1]){
            //    Swap!
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps=false;
           }
        }
        // console.log("One Pass complete!")
        if(noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([37,45,29,8]))

// big O is O(n^2) but for nearly sorted data is O(n) almost with the optimized version no Swaps
// to short circuit if there is no swap
