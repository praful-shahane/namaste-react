  
  /*
         <div id="parent">
           <div id="child">
           <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
           </div>
            <div id="child2">
           <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
           </div>
         </div> 
   */


   
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
   
   //write your react code here.
   //createElement(specifyTagName,createObject,textyouWantToPutInsideTag);
   //it is core thing of react.
    // const heading = React.createElement("h1",{
    //     id:"heading",xyz:"abc"
    // },"Hello World from React !");

//heading is an react element which is noting but a javascript object.



       //add heading into root
  //take the react element like heading react element and put it inside root element.