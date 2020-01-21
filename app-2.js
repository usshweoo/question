//1.Sort array
// var arr = [7,9,10,11,34];

// const sort = Array => {
//     while(count < 4){
//         console.log('running');
//         // done = true;
//         for(var i = 1 ; i < arr.length ; i++){
            
//             var firstIndexLastWord = +arr[i-1].toString().split('').pop();
//             console.log('first ', firstIndexLastWord, i);
//             var lastWord = +arr[i].toString().split('').pop();
//             if(firstIndexLastWord > lastWord){
//                 console.log('first is bigger')
//                 done = false;
//                 var tmp = firstIndexLastWord;
//                 arr[i-1] = arr[i];
//                 arr[i] = tmp;
//             }
//             count++;
//         }
        
//     }
//     console.log(arr);
//         return arr;
      
// }

// sort(arr);



var arr = [7,9,10,11,34];
// 2.find firstBiggestNum,secondBiggestNum,thridBiggestNum
var copyArr = arr.slice();
var bigNum = 0;
var bigIndex;
var count = 1;
var bigNumbers = [];
var firstBiggestNumber = 0;
var secondBiggestNumber = 0;
var thirdBiggestNumber = 0;

while( count <= 3){
    for(var i = 0; i < copyArr.length ; i++){
        if(copyArr[i] > bigNum){
            bigNum = copyArr[i];
            bigIndex = i;
        }
    }
    bigNumbers.push(bigNum);
    bigNum = 0;
    copyArr.splice(bigIndex,1);
    count++;
}
firstBiggestNumber = bigNumbers[0];
secondBiggestNumber = bigNumbers[1];
thirdBiggestNumber = bigNumbers[2];
console.log('first ', firstBiggestNumber);
console.log('second ', secondBiggestNumber);
console.log('third ', thirdBiggestNumber);


// 3.find smallestNum,secondSmallestNum,thirdSmallestNum
var copyArr = arr.slice();
var smallNum = copyArr[0];
var smallIndex;
var count = 1;
var smallNumbers = [];
var firstSmallestNumber = 0;
var secondSmallestNumber = 0;
var thirdSmallestNumber = 0;

while( count <= 3){
    console.log(copyArr);
    for(var i = 1; i < copyArr.length ; i++){
        if(copyArr[i] <  smallNum){
            smallNum = copyArr[i];
            smallIndex = i;
        }
    }
    smallNumbers.push(smallNum);
    copyArr.splice(smallIndex,1);
    smallNum = copyArr[0];
    console.log('afrter ', copyArr);
    count++;
}
firstSmallestNumber = smallNumbers[0];
secondSmallestNumber = smallNumbers[1];
thirdSmallestNumber = smallNumbers[2];
console.log('first ', firstSmallestNumber);
console.log('second ', secondSmallestNumber);
console.log('third ', thirdSmallestNumber);


















