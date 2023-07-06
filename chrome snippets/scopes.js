// let a=[10,20,30]
// let b=[10,20,30]
// console.log(a===b)  false

// let a=10
// let b=[10,20,30]
// console.log(a===b)


// for(let i=0;i<10;i++){
    
// }
// console.log(i) //ref error

// let a=11;
// if(true){
//     let b=10;
//     if(true){
//         console.log(b)
//     }
// }
// console.log(a)
// //10 
// //11
function a(){
    var b=10;
    c();
    function c(){
        console.log(b)
}
}
a()
// console.log(b)