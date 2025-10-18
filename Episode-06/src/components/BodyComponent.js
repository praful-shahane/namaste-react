 import React from "react";  //Default Import
import ReactDOM from "react-dom/client";
 import RestaturantCardComponent from "./RestaturantCardComponent" ;
import {useState, useEffect } from "react";  //Named Import
import ShimmerComponet from "./ShimmerComponent";

 
 const BodyComponent =()=>{
    //Local State Variable  in React
   // const arr1=useState(restaurantList);   //to set mockData initially before API data loads.
    const arr=useState([]);  //Initially empty array before API data loads. 
     const [listOfRestaurants, setListOfRestaurant]=arr; //Destructuring of array
 
     //Whenever React's state variables update, React triggers a reconciliation cycle(Re-Renders the Component)
console.log("Body rendered...");

       const[searchText, setSearchText]= useState(""); //Local State Variable for search box
       const[filteredRestaurants, setFilteredRestaurants]= useState([]); //Local State Variable for filtered restaurant list.


     /*
     Once the component is rendered fully completed, we will call callBackFunction we pass inside the useEffect.
     so, if you have to do anything once the component is rendered, you can do it inside the useEffect.
     */
     useEffect(()=>{
      console.log("UseEffect called");
      fetchData();
      
     },[]);  //1st argument is callback function, 2nd argument is dependency array.

     //Using async await way of writing function
  const fetchData =async ()=>{
       const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
        //get JsON from the response object
      const jsonData= await data.json();
      console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      //set the data which we fetch from API to the local state variable

      //Optional Chaining Operator (?.) is used to avoid runtime errors if any property is undefined or null.
      setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      //when we fetch the data from API, we have to set the filtered restaurant list also.
      setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


/*

     //Traditional way of writing function in Javascript
     //Pure Javascript function to fetch data from API
     const fetchData1 = ()=>{
      //fetch is given by browser to make API calls. not by Javascript.
      //fetch always returns a promise.
      const data = fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
     };
*/


 // listOfRestaurants is empty array initially. So, we will show loading....
 //  until the data is fetched from API and set to the local state variable.

 //This  is Conditional Rendering concept.
 //Rendering on the basis of condition is conditional rendering.
  //  if(listOfRestaurants.length===0){
  //   return <ShimmerComponet />;  
  //  }

    return     listOfRestaurants.length===0 ? <ShimmerComponet/> : (
      <div className="body"> 
       <div className="filter">
        <div  className="search">
            <input  type="text"  className="search-box"  value={searchText} 
              onChange={ (e)=>{
                   setSearchText(e.target.value);
              }}
            />
             <button
             onClick={()=>{
                //Filter the restaurant cards & update the UI.
                //we need searchText here ignore case.
const filterRestaurantList=listOfRestaurants.filter(res=>
 res.info.name.toLowerCase().includes(searchText.toLowerCase())
);    
//update the restaurant list by filtered restaurant list.
 setFilteredRestaurants(filterRestaurantList);
              }}
             >search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
        // filtering the restaurants based on rating>4. is is pure JS filter code.
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4.5);
         setFilteredRestaurants(filteredList);  //React way to update the local state variable
        }}
        >Top Rated Restaurants</button>
       </div>
       <div className="res-container"> 
      {filteredRestaurants.map((restaurant,index)=>
      ( <RestaturantCardComponent  key={index} resData={restaurant} />
      ))}
      </div>
      </div>
    );
  };

  export default BodyComponent;