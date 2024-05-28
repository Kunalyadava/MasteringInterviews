function mobile(){
    return {
        model :'Glaxy',
        price:function(){return ("Price :Rs. 3000");}
    }
}
var samsung=mobile()
console.log(samsung.model+" "+samsung.price())