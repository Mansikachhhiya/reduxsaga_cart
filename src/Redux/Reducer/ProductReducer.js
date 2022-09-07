import {SET_PRODUCT_LIST} from "../constant"
export const ProductData=(data=[],action)=>{
   switch (action.type){
      // case PRODUCT_LIST:
      //    console.log("Product list reducer called",action);
      //    return [...action.data]
      case SET_PRODUCT_LIST:
         console.log("set Product list reducer called",action);
         return [...action.data]
      default:
         return data
   }
}