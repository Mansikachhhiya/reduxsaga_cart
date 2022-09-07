import React from "react";
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

export const Header = ()=>{
     const result=useSelector((state) => state.cartData);
     // console.log(result.length);

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="buttons">
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>cart({result.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
