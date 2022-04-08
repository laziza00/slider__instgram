// arr = [
//     [1, 1, 1, 1],
//     [5, 2, 2, 100],
//     [9, 4, 2, 1]
// ]

// arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]

// for (let j =1; j<arr[0].length; j++) {
//     arr[0][j] += arr[0][j-1]
// }

// for (let j =1; j<arr.length; j++) {
//     arr[j][0]  += arr[j-1][0]
// }

// for (let i=1; i<arr.length; i++) {
//     for (let j=1; j<arr[i].length; j++) {
//         const top = arr[i-1][j];
//         const left = arr[i][j-1] ;

//         arr[i][j] += top > left? left: top;
//     }
// }
// console.log(arr[arr.length -1][arr[0].length-1]);


// let b = arr

// for (let i=1; i<arr[0].length; i++) {
//     if(b) {
//           arr[0][i] += arr[0][i-1];
//     }
   
//     for (let j=0; j<arr.length; j++) {
//     //    arr[j][0]  += arr[j-1][0]
//     }
// }
// console.log( b);

//========== problem 1 ============

// let arr = [10, 1, 3, 5, 8, 9];

// for (let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length; j++) {
//         if(arr[j] >arr[j+1]) {
//             let a = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = a
//         }
//     }
// }
// console.log(arr);

let n=2; 
let k =3;
let b =0

for (let i=1; i<k; i++) {
    for (let i=0; i<n; i++) {
        let sum =1
        sum *= i
    }
}