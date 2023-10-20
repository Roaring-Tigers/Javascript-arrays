
let arr = [10,20,30,40,50,60]

n = 35
let flag = false

for(let t of arr){
     if(t==n){
        console.log("Number found")
        flag = true
        break
     }
}

if(flag==false){
    console.log("Number not found")
}