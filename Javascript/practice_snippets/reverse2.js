function reverrse(number){
let reverse=0
while(number>0){
reverse=reverse*10+number%10
number=(number/10)
}
return(reverse)
}
console.log(reverrse(12345))