import React, { useState } from "react";
import logo from "./img/logo.png";
import {useHistory} from "react-router-dom";
import Login_LogoutButton from "./Login_LogoutButton";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Link} from 'react-scroll';
import Footer from "./Footer";

function Navbar() {
  let history= useHistory();
  // let shistory= useHistory();
  return (
    <>
   
    <div className="bg-img">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow"style={{backgroundColor: "#7B96D8 "}}>
 <div className="container-fluid">
 <a className="navbar-brand" href="#">
     <img src={logo} alt="" width="100" height="30"/>
   </a>
   <a className="navbar-brand" href="/">GHARKUL</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/">Home</a>
       </li>
       <li className="nav-item">
        
       <li><Link  to="about" spy={true} smooth={true} className="nav-link">About</Link></li>
       </li>

         

       {/* <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Facilities
         </a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <li><a className="dropdown-item" href="#">Bills and Payments</a></li>
           <li><Link className="dropdown-item" to={"/Complaints"}>Complaints</Link></li>
           <li><a className="dropdown-item" href="#">Maintenance</a></li>
           <li><a className="dropdown-item" href="#">Notice</a></li>
           <li><a className="dropdown-item" href="#">Events</a></li>
           <li><a className="dropdown-item" href="#">Meetings</a></li>
         </ul>
       </li> */}
       <li className="nav-item">
         <li><Link  to="contact" spy={true} smooth={true} className="nav-link">Contact-Us</Link></li>
         {/* <Link to={Footer}>Contact Us</Link> */}

       </li>
       <li className="nav-item">
         <a className="nav-link" href="/Rules">Rules and Regulations</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/Why-Gharkul">Why Gharkul?</a>
       </li>
     </ul>
     <form className="d-flex">
        {/* <button onClick={() => {history.push("/Login");}} className="btn btn-primary" type="submit">Login</button> */}
       {/* <button onClick={() => {shistory.push("/SignUp");}} className="btn btn-primary m-1 mx-2 btn-sm" type="submit">Sign Up</button> */}
       {/*<button onClick={() => {history.push("/Login");}} className="btn btn-primary m-1 mx-4 btn-sm" type="submit">Login</button>*/}
       <Login_LogoutButton history ={history}/>
     </form>
   </div>
 </div>
</nav>
</div>
   </>
  );
}

export default Navbar;
