
// let arr = [10,20,30,40,50,60,70,80,90,100]

// let index = arr.indexOf(50) // 4 

// let arr1 = arr.slice(0,index+1) // [10,20,30,40,50]

// arr1.pop()

// let arr2 = arr.slice(index+1) // [60,70,80,90,100]

// let arr3 = arr1 + arr2 

// arr1 = "10,20,30,40"
// arr2 = "60,70,80,90,100"

// let arr3 = []
// for(t of arr1){
//       arr3.push(t)
// }
// for(t of arr2){
//         arr3.push(t)
// }
// arr3 = [...arr1, ...arr2]  
// console.log(arr3)

// spread operator: ... 

// let a = [10,20,30,40]

// let b = [...a]

// console.log(b)



// let arr = [10,20,30,40,50,60,70,80,90,100]


// for( i = 4; i<=arr.length-1; i++){
//     arr[i] = arr[i+1]
    
// }
// arr.pop()

// console.log(arr)



let arr = [10,20,30,40,50,60,70,80,90,100] 

for(i = arr.length-1; i>=4; i--){
    arr[i+1] = arr[i]
    
}

arr[4] = 45
console.log(arr)




