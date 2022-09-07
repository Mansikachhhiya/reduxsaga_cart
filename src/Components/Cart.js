import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RemoveCart,IncreaseQty,DecreaseQty} from "../Redux/Action/action";
const Cart=()=>{
    const CartData =useSelector((state)=>state.cartData);
    console.log("Cart DAta,",CartData);
    // let TotalAmount = CartData.length && CartData.map(item=>item.price).reduce((prev,next)=>prev+next);
    // const dispatch = useDispatch()
    // const data = useSelector(state => state.ProductData);
    return(
        <div>
            <h1>Cart page</h1>
            {/*<section className="h-100 h-custom">*/}
            {/*    <div className="container py-5 h-100">*/}
            {/*        <div className="row d-flex justify-content-center align-items-center h-100">*/}
            {/*            <div className="col-12">*/}
            {/*                <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>*/}
            {/*                    <div className="card-body p-0">*/}
            {/*                        <div className="row g-0">*/}
            {/*                            <div className="col-lg-8">*/}
            {/*                                <div className="p-5">*/}
            {/*                                    <div className="d-flex justify-content-between align-items-center mb-5">*/}
            {/*                                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>*/}
            {/*                                    </div>*/}
            {/*                                    <hr className="my-4" />*/}
            {/*                                </div>*/}
            {/*                                {*/}
            {/*                                    CartData.map((item) =>*/}
            {/*                                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>*/}
            {/*                                            <div className="col-md-2 col-lg-2 col-xl-2">*/}
            {/*                                                <img src={item.image} style={{width:"120px",height:"100px"}} alt={item.title}/>*/}
            {/*                                            </div>*/}
            {/*                                            <div className="col-md-3 col-lg-3">*/}
            {/*                                                <h6 className="text-muted">{item.title}</h6>*/}
            {/*                                            </div>*/}
            {/*                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">*/}
            {/*                                                <button className="btn btn-link px-1"  onClick={() => dispatch(DecreaseQty(item.id))}>*/}
            {/*                                                    <i className="fas fa-minus"></i>*/}
            {/*                                                </button>*/}

            {/*                                                <input id="form1" min="0" name="quantity" value="1"*/}
            {/*                                                       type="number"*/}
            {/*                                                       className="form-control form-control-sm mx-2"/>*/}

            {/*                                                <button className="btn btn-link px-1" onClick={() => dispatch(IncreaseQty(item.id))}>*/}
            {/*                                                    <i className="fas fa-plus"></i>*/}
            {/*                                                </button>*/}
            {/*                                            </div>*/}
            {/*                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">*/}
            {/*                                                <h6 className="mb-0">{item.price}</h6>*/}
            {/*                                            </div>*/}
            {/*                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">*/}
            {/*                                                <button className="btn  my-4 mx-2" onClick={() => dispatch(RemoveCart(item.id))}>*/}
            {/*                                                    <i className="fas fa-trash fa-lg text-danger"></i></button>*/}
            {/*                                            </div>*/}
            {/*                                        </div>)*/}
            {/*                                }*/}
            {/*                                <hr className="my-4" />*/}
            {/*                                /!*<div className="d-flex justify-content-between p-2 mb-2">*!/*/}
            {/*                                /!*    <p className="fw-bold">Discount:</p>*!/*/}
            {/*                                /!*    <p className="fw-bold"></p>*!/*/}
            {/*                                /!*</div>*!/*/}
            {/*                                <div className="d-flex justify-content-between p-2 mb-2">*/}
            {/*                                    <h5 className="fw-bold mb-0">Total Price:</h5>*/}
            {/*                                    <h5 className="fw-bold mb-0">{TotalAmount}</h5>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</section>*/}



        </div>
    )
}
export default Cart;