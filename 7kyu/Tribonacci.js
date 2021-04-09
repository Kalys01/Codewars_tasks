// var arr = [1, 2, 3];
// var n = 5;
// if(n < 4) {
//     console.log(arr)
// }else {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             arr.push(arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]) 
//         }
//         console.log(arr); 
//     }
//     console.log(arr);
// }



// function solution(arr, n) {
//     let  s;
//     for (let i = 0; i < n; i++) {
//         arr.map(function(s){
//             s
//         })

//         s = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
//     }
//     return res
// }
// console.log(solution([1, 1, 1], 10));



let arr = [1,2,3,4,45,5];
// console.log(arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]);
console.log(arr.map((a, b) => a + (b - 1) ));