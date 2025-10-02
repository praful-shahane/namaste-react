  import React from "react";
  import ReactDOM from "react-dom/client";
   
   const parent= React.createElement( "div", {id:"parent"},[ 
    React.createElement( "div", {id:"child"},  [ //Array of children
                          React.createElement("h1",{},"i am H1 tag"),
                          React.createElement("h2",{},"i am H2 tag")
                         ] ), 
      React.createElement( "div", {id:"child2"},  [ //Array of children
                          React.createElement("h1",{},"i am H1 tag"),
                          React.createElement("h2",{},"i am H2 tag")
                         ] )
                        ]);

        console.log(parent); 
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
