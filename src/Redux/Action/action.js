import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_TO_CART,INCREASE_QUANTITY,DECREASE_QUANTITY} from "../constant";
export const addToCart=(data)=>{
    console.log("action called",data);
    return {
        type: ADD_TO_CART,
        data:data
    }
}
export const RemoveCart=(data)=>{
    console.log("remove action called",data);
    return {
        type: REMOVE_TO_CART,
        data:data
    }
}
export const EmptyCart=(data)=>{
    console.log("Empty action called",data);
    return {
        type: EMPTY_TO_CART,
        data:data
    }
}
export const IncreaseQty=(data)=>{
    console.log("Increase  action called",data);
    return {
        type: INCREASE_QUANTITY,
        data:data
    }
}
export const DecreaseQty=(data)=>{
    console.log("Decrease action called",data);
    return {
        type: DECREASE_QUANTITY,
        data:data.name
    }
}