let ingredientes= ["masa","oregano","salsa","queso","jamon","salame","aceitunas","romero","albahaca","perejil"]

let ing_pares= []

let ing_impares=[]

const fun_principal = (ingredientes) =>{
    for (let i=0; i< ingredientes.length; i++){
        if (ingredientes[i].length % 2 === 0){
            ing_pares.push(ingredientes[i])
        }
        else{
            ing_impares.push(ingredientes[i])
        }
    }
    console.log("los ingredientes pares son:" + ing_pares)
    console.log("los ingredientes impares son:" + ing_impares)
    return;
}

console.log(fun_principal(ingredientes));