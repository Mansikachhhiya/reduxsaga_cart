import {PRODUCT_LIST} from "../constant";

export const ProductListing=()=>{
    console.log(" product action called");
    return {
        type: PRODUCT_LIST,
    }
}

// export const SetProductListing=(data)=>{
//     console.log(" product action called",data);
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }
