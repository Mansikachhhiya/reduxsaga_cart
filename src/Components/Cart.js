import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RemoveCart,IncreaseQty,DecreaseQty} from "../Redux/Action/action";
const Cart=({})=>{
    const CartData =useSelector((state)=>state.cartData);
    console.log("Cart DAta,",CartData);
    let TotalAmount = 0;
    Object.keys(CartData.Cart).forEach(function (item) {
        TotalAmount+=CartData.Cart[item].qty * CartData.Cart[item].price;
        // CartData.Cart.push(items.Cart[item]);

    });
    function TotalPrice(price,amount){
        return Number(price* amount).toLocaleString('en-us');
    }

    const dispatch = useDispatch()
    // const data = useSelector(state => state.ProductData);
    return(
        <div>
            <h1>Cart page</h1>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                </div>
                                                <hr className="my-4" />
                                            </div>
                                            {
                                                CartData.Cart.map((item,key) =>
                                                    <div className="row mb-4 d-flex justify-content-between align-items-center" key={key}>
                                                        <div className="col-md-2 col-lg-2 col-xl-3 ">
                                                            <img src={item.image} style={{width:"120px",height:"100px"}} alt={item.name}/>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <h6 className="text-muted">{item.name}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-1 ">
                                                            <h6 className="mb-0">$ {item.price}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            <button className="btn btn-link px-1"  onClick={() => dispatch(DecreaseQty(key))}>
                                                                <i className="fas fa-minus"></i>
                                                            </button>

                                                            <span className="btn btn-info">{item.qty}</span>

                                                            <button className="btn btn-link px-1" onClick={() => dispatch(IncreaseQty(key))}>
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>

                                                        <div className="col-md-1 col-lg-1 col-xl-1 ">
                                                            <button className="btn  my-4 mx-2" onClick={() => dispatch(RemoveCart(key))}>
                                                                <i className="fas fa-trash fa-lg text-danger"></i></button>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <h6 className="mb-0">$ {TotalPrice(item.price,item.qty)}</h6>
                                                        </div>
                                                    </div>)
                                            }
                                            <hr className="my-4" />
                                            {/*<div className="d-flex justify-content-between p-2 mb-2">*/}
                                            {/*    <p className="fw-bold">Discount:</p>*/}
                                            {/*    <p className="fw-bold"></p>*/}
                                            {/*</div>*/}
                                            <div className="d-flex justify-content-between p-2 mb-2">
                                                <h5 className="fw-bold mb-0">Total Price:</h5>
                                                <h5 className="fw-bold mb-0">$ {Number(TotalAmount).toLocaleString('en-us')}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>



        </div>
    )
}
export default Cart;