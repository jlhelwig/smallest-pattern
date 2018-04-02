// describe("Basic tests", function(){
// Test.assertDeepEquals(findPattern([1, 2, 3, 4, 5]), [1]);
// Test.assertDeepEquals(findPattern([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), [1, 1, 1, 1, -1, -1, -1, -1]);
// Test.assertDeepEquals(findPattern([1, 5, 2, 3, 1, 5, 2, 3, 1]), [4, -3, 1, -2]);
// Test.assertDeepEquals(findPattern([1, 5, 4, 8, 7, 11, 10, 14, 13]), [4, -1]);
// Test.assertDeepEquals(findPattern([0, 1]), [1]);
// });


function findPattern(arr){
  let primPattern=[];
  let front = [];
  let back = [];
  let frontCheck = [];
  let backCheck = [];
  let frontThird=[];
  let backThird=[];

    for (let i=0; i<arr.length-1; i++){
      primPattern.push(arr[i+1]-arr[i]);
    };



    for (let t=0; t<primPattern.length; t++){
      // if (primPattern.slice(0,t)===primPattern.slice(primPattern.length-t-1,primPattern.length-1)) {
      front.push(primPattern[t]);
      back.unshift(primPattern[primPattern.length-t-1]);
      // back=back.reverse();
      // back = back.reverse();
        console.log(front);
        // let back =primPattern.slice(primPattern.length-t,primPattern.length);
        console.log(back);
        if (JSON.stringify(front)===JSON.stringify(back)){console.log('this ' + front);return front};

      }

      //checks if it can be broken into two
      if (primPattern.length%2===0){
        for (let m=0; m<primPattern.length/2; m++){
          frontCheck.push(primPattern[m])
          backCheck.unshift(primPattern[primPattern.length-m-1])
        }
        if (JSON.stringify(frontCheck)===JSON.stringify(backCheck)){
          return frontCheck;
        }
      }
      //checks if it can be broken into three
      if (primPattern.length%3===0){
        for (let m=0; m<primPattern.length/3; m++){
          frontCheck.push(primPattern[m])
          backCheck.unshift(primPattern[primPattern.length-m-1])
        }
        if (JSON.stringify(frontCheck)===JSON.stringify(backCheck)){
          return frontCheck;
        }
      }

}


console.log(findPattern([1, 2, 3, 4, 5]));
console.log(findPattern([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(findPattern([1, 5, 2, 3, 1, 5, 2, 3, 1]));
console.log(findPattern([1, 5, 4, 8, 7, 11, 10, 14, 13]));
console.log(findPattern([0, 1]));
