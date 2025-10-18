import  {LOGO_URL} from "../utils/constants";     
import { useState } from "react"; 

  const HeaderComponent =()=>{
    const [btnNameReact,setBtnNameReact]= useState("Login");
    console.log("Header Rendered");
    
    /* btnNameReact is speacial react variable.
        we can not directly modify it.

        ex:- btnNameReact intial value is "Login".
        we  want to change it to "LogOut". 
        Using Direct way by assigning value is not work here.
         btnNameReact="Logout"  --> this is wrong.

        so, we have to use the function setBtnNameReact to modify it.
        setBtnNameReact("Logout") --> this is correct.
    */
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li> 
                <button  className="login" onClick={
                  ()=>{
                       btnNameReact==="Login"? setBtnNameReact("LogOut"):  setBtnNameReact("Login");
                  }}>{btnNameReact}</button>
              </ul>
          </div>
         </div>
    );
  };

  export default HeaderComponent;