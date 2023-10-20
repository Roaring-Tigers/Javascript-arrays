
let v1 = "12.35.56"
let v2 = "13.34.056"

let arr1 = v1.split(".") // ["12","34","56"]    
let arr2 = v2.split(".") // ["12","035","056"]

let count = 0
for(let i = 0; i<=arr1.length-1; i++){
     
    if(+arr1[i] > +arr2[i]){
         console.log("Downgrade")
         break;
    }
    else if(+arr1[i] < +arr2[i]){
        console.log("Upgrade")
        break;
    }

    else{
        count++
    }


}

if(count == 3){
    console.log("No change")
}