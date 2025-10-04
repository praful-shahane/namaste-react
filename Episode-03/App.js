  import React from "react";
  import ReactDOM from "react-dom/client";
   
  //Title Component
const Title = ()=>  (<h1 className="head" tabIndex="1">
    Namaste React Title React Element
      </h1>
      
    );
      //React Functional Component
const HeadingCompoenent = ()=>{
  return (<div id="container">
     {Title()} 
  <h1>Namaste React Functional Component</h1>
</div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompoenent />);