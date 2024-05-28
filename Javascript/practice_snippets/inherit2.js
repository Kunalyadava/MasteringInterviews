// function objectCreater1(o,a,b,c,d,e){
//  let obj=o
//     obj.prop1=a;
//     obj.prop2=b;
//     obj.prop3=c;
//     obj.prop4=d;
//     obj.prop5=e
//     return obj
// }
// function objectCreater2(a,b,c,d,e,f){
//     let obj={}
//     obj.prop1=a
//     obj.prop2=b
//     obj.prop3=c
//     obj.prop4=d
//     obj.prop5=e
//     obj.prop6=f
//     return obj
// }
// console.log(objectCreater2('a','b','c','d','e','f'))


function objectCreater1(o,a,b,c,d,e){
 let obj=o
    obj.prop1=a;
    obj.prop2=b;
    obj.prop3=c;
    obj.prop4=d;
    obj.prop5=e
    return obj
}
function objectCreater2(a,b,c,d,e,f){
    let obj={}
    objectCreater1(obj,a,b,c,d,e)
    // obj.prop1=a
    // obj.prop2=b
    // obj.prop3=c
    // obj.prop4=d
    // obj.prop5=e
    obj.prop6=f
    return obj
}
console.log(objectCreater2('a','b','c','d','e','f'))