import  {LOGO_URL} from "../utils/constants";     
import { useState ,useEffect , useContext} from "react"; 
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

  const HeaderComponent =()=>{

    const [btnNameReact,setBtnNameReact]= useState("Login");
        

     const data = useContext(UserContext);

    const onlineStatus = useOnlineStatus();
    console.log("Header Rendered");

     console.log(data);

      useEffect(()=>{
        console.log("Header useEffect called");
      },[btnNameReact]);
 



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
                  <li className="px-4 font-bold">  {data.loggedInUser} </li>
              </ul>
          </div>
         </div>
    );
  };

  export default HeaderComponent;