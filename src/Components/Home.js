
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {addToCart,RemoveCart,EmptyCart} from "../Redux/Action/action";
import { ProductListing} from "../Redux/Action/ProductAction"
import {useEffect} from "react";

const Home =  ()=> {
    const dispatch = useDispatch()
    const data = useSelector(state => state.ProductData);

useEffect(()=>{
    dispatch(ProductListing());
},[])
    console.log("data in Home component from saga", data);
    // const product = {
    //     name: "phone",
    //     type: 'mobile',
    //     price: 20000
    // }
    // return (
    //     <div>
    //         <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(addToCart(product))}>Add to
    //             cart
    //         </button>
    //         <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(RemoveCart(product.name))}>Remove
    //             from cart
    //         </button>
    //         <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(EmptyCart())}>Empty cart</button>
    //         <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(ProductListing())}>Product List
    //         </button>
    //     </div>
    //      )
    const ShowProduct=()=>{
        return(
            <>
                {/*<div className="buttons d-flex justify-content-center mb-5 pb-5">*/}
                {/*    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>*/}
                {/*    <button className="btn btn-outline-dark me-2 " onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>*/}
                {/*    <button className="btn btn-outline-dark  me-2"  onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>*/}
                {/*    <button className="btn btn-outline-dark  me-2"  onClick={()=>filterProduct("jewelery")}>Jewelery</button>*/}
                {/*    <button className="btn btn-outline-dark  me-2"  onClick={()=>filterProduct("electronics")}>Electronic</button>*/}
                {/*</div>*/}
                {data.map((product)=>{
                    return(
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title md-0">{product.title.substring(0,12)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        {/*<NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">BUY NOW</NavLink>*/}
                                        <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                                        {/*<button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(RemoveCart(product.id))}>Remove from cart</button>*/}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )}
    return(
        <div>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-2">
                        <button className="btn btn-outline-dark my-4 mx-2" onClick={() => dispatch(ProductListing())}>Product List</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProduct />
                </div>
            </div>
        </div>
    )
}

export default Home;
