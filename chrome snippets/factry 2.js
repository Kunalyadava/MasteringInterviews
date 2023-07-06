
function mobile(model_No){
    return {
        model :model_No,
        price:function(){return ("Price :Rs. 3000");}
    }
}
var samsung=mobile("glaxy")
var Nokia=mobile("ExpressMusic")
 
console.log(Nokia.model+" "+Nokia.price())
            //ExpressMusic Price :Rs. 3000
