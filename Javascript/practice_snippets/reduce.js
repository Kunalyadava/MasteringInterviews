let array=[1,2,3,4]
let reducefn=array.reduce((acc,el,i,arr)=>{
    acc=acc*el
     return acc},)
console.log(reducefn)