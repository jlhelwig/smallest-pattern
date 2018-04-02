
function findPattern(arr){
  let counter = 0
  let primPattern=[];
    for (let i=0; i<arr.length-1; i++){
         primPattern.push(arr[i+1]-arr[i]);
    };
  let smallestSlice = primPattern.length
    for (let j=smallestSlice; j>=2;j--){
      if(smallestSlice%j===0){
        counter = 0
        for (let i=1; i<=j-1; i++){
          if (JSON.stringify(primPattern.slice(0,primPattern.length/j)) === JSON.stringify(primPattern.slice(i*primPattern.length/j,i*primPattern.length/j+primPattern.length/j))){
            counter++
          };
          if (counter===j-1){
            return primPattern.slice(0,primPattern.length/j)
          }
        }
      }
    }
    return primPattern
  }


console.log(findPattern([1, 2, 3, 4, 5]));
console.log(findPattern([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(findPattern([1, 5, 2, 3, 1, 5, 2, 3, 1]));
console.log(findPattern([1, 5, 4, 8, 7, 11, 10, 14, 13]));
console.log(findPattern([0, 1]));
