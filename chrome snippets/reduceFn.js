let developers_array=[
    {first:"John",last:"Doe",Dept:"FE"},
     {first:"ohn",last:"Foe",Dept:"ECE"},
     {first:"Rohn",last:"Xoe",Dept:"ME"}
]
//expected op 
//let eng=["John Doe","ohn Foe","Rohn Xoe"]
let eng=developers_array.reduce((acc,item)=>{
    let fullName=item.first+' '+item.last;
    acc.push(fullName)
    return acc;
},[])
console.log(eng)


///
let engineers=developers_array.map((el)=>{
return el.first+" "+el.last})
console.log(engineers)
                                   
///
let engineers=developers_array.map(el=>el.first+" "+el.last)
console.log(engineers)
                        

