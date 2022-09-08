import {ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART,INCREASE_QUANTITY,DECREASE_QUANTITY} from "../constant";

const InitProduct={
    numCart:0,
    Cart:[],
}
export const cartData=(data=InitProduct,action)=>{
    console.log("data",InitProduct.Cart);
    const DATA = action.data;
    console.log(":DATA",DATA);
    switch (action.type){
        case ADD_TO_CART:
            console.log("add reducer called ",action)
            if(data.numCart===0){
                let carts={
                    id:action.data.id,
                    qty:1,
                    name:DATA.title,
                    image:DATA.image,
                    price:DATA.price,
                }
                data.Cart.push(carts);
            }
            else {
                let check =false;
                data.Cart.map((item,key)=>{
                    if(item.id===DATA.id){
                        data.Cart[key].qty++;
                        check=true;
                    }
                });
             if(!check){
                 let _Carts={
                     id:DATA.id,
                     qty:1,
                     name: DATA.title,
                     image:DATA.image,
                     price:DATA.price,

                 }
                 data.Cart.push(_Carts);
             }
            }
         return {
                ...data,
             numCart: data.numCart+1
         };
        case  REMOVE_TO_CART:
            console.log(" REMOVE reducer called ",action)
          const Qty = data.Cart[DATA].qty;
            return {
                ...data,
                numCart: data.numCart - Qty,
                Cart:data.Cart.filter(item =>{
                    return item.id!==data.Cart[DATA].id
                })
            }
        case  EMPTY_TO_CART:
            console.log(" Empty reducer called ",action)
            data =[];
            return [...data];
        case  INCREASE_QUANTITY:
            console.log(" Increase reducer called ",action)
            data.numCart++;
            data.Cart[DATA].qty++;
            return{
                ...data
            }
        case  DECREASE_QUANTITY:
            console.log(" Decrease reducer called ",action)
            console.log(data.Cart[DATA].qty);

            if(data.Cart[DATA].qty>1) {
                data.numCart--;
                data.Cart[DATA].qty--;
            }
            return {...data};
        default:
            return data ;

    }

}
