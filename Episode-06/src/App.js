  import React from "react";
  import ReactDOM from "react-dom/client";
  import HeaderComponent from "./components/HeaderComponent" 
  // we can write extension as well  import HeaderComponent from "./components/HeaderComponent.js"
  import BodyComponent from "./components/BodyComponent";
 




const AppLayOut =()=>{

    console.log(<BodyComponent />);
    
  return (
  <div className="app">
    <HeaderComponent />
     <BodyComponent />
  </div>);
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);