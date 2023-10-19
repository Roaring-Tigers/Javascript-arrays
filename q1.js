
// lets take an array of numbers, find sum of all numbers  

let arr = [10,20,30,40,50,60,70,80,90,100]

// let sum = 0
// for(let t of arr){
//     sum = sum + t
// }
// console.log(sum)

// take two array find sum of corrosponding element and store it in 3rd array

let arr1 = [10,20,30,40,50,60,70,80,90,100]
let arr2 = [1,2,3,4,5,6,7,8,9,10]

let arr3 = []


for(let i = 0 ; i<=arr1.length-1; i++){
    arr3[i] = arr1[i] + arr2[i]
}
console.log(arr3)


