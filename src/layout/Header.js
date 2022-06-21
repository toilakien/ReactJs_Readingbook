import bannerbookstore from "./bannerbookstore.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import *as actions from '../redux/actions/actionBooks';
function Header() {
    const dispatch=useDispatch();
    const [input,setInput]=useState("");
    const find=(input)=>{
        dispatch(actions.findBook(input))
    }
    return (
        <div>
            <div className="row">
                <div style={{ padding: "0" }} className="col-12">
                    <img style={{ width: "100%", height: "200px" }} src={bannerbookstore} alt="bannerbookstore" />
                </div>
            </div>
            <div className="row ">
                <nav className=" navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active" aria-current="page" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="books">Books</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="">More</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input onChange={(e)=>setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Link to="/find" onClick={(e)=>{e.preventDefault(); find(input)}} className="btn btn-outline-success" >Search</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}
export default Header;