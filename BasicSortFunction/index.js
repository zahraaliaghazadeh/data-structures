

function compareByLen(str1,str2){
    return str1.length-str2.length
}

console.log((["Steele", "Colt", "Data Structures", "Algorithms"]).sort(compareByLen));

// 1 - 2 is ascending order and 2 - 1 is descending order