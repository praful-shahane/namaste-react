import  {LOGO_URL} from "../utils/constants";     
import { useState ,useEffect} from "react"; 
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();
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
      <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-amber-300 lg:bg-green-200">
        <div className="logo-container">
           <img className="w-56" src={LOGO_URL} />
          </div>
          <div className="flex items-center">
              <ul className="flex p-4 m-4 ">
              <li className="px-4">
                Online Status: { onlineStatus? "🟢 Online":"🔴 Offline"}
                </li>
                <li className="px-4" > <Link to="/">Home</Link></li>
                <li className="px-4" > <Link to="/about">About Us</Link></li>
                <li className="px-4" >
                   <Link to="/contact">Contact Us</Link>
                </li>
                 <li className="px-4" >
                   <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4" >Cart</li> 
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