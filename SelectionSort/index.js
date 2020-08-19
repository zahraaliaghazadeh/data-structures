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

