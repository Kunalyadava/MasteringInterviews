let arr=[1,2,3,4,5,6,7]
let max=-Infinity
for(let i=0;i<=arr.length-1;i++){
    if(max<arr[i])
        max=arr[i]
}
console.log(max)