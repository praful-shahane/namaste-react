import  {LOGO_URL} from "../utils/constants";     
import { useState ,useEffect} from "react"; 
import { Link } from "react-router";

  const HeaderComponent =()=>{
        /* btnNameReact is speacial react variable.
        we can not directly modify it.

        ex:- btnNameReact intial value is "Login".
        we  want to change it to "LogOut". 
        Using Direct way by assigning value is not work here.
         btnNameReact="Logout"  --> this is wrong.

        so, we have to use the function setBtnNameReact to modify it.
        setBtnNameReact("Logout") --> this is correct.
    */
    const [btnNameReact,setBtnNameReact]= useState("Login");
    console.log("Header Rendered");

      useEffect(()=>{
        console.log("Header useEffect called");
      },[btnNameReact]);
   /*  useEffect will every time called after the component is rendered.
    []  --> this is dependency array. it is an optional parameter.
      only callback function is mandatory parameter.

    1) if no depndency array is provided.
    ex:- 
          useEffect(()=>{
        log("Header useEffect called");
      });
      ->if we don't provide dependency array, useEffect will be called every time after the component is rendered.
      so, as soon as we make changes,  our Component  as well as useEffect will call every time.

    2) if empty depndency array is provided.
    ex:- 
          useEffect(()=>{
        log("Header useEffect called");
      },[]);
      ->if we provide empty dependency array, useEffect will be called only one time after the first render of the component.
      -> component can be called again when component re-render & again but not useEffect function.
     3) if we provide dependency array with some variables.
        then useEffect will be called only when those variable values are changed.
     ex:-
           useEffect(()=>{
        console.log("Header useEffect called");
      },[btnNameReact]);

  */
    

    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src={LOGO_URL} />
          </div>
          <div className="nav-items">
              <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About Us</Link></li>
                <li>
                   <Link to="/contact">Contact Us</Link>
                </li>
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