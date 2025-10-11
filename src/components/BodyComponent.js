 import React from "react";  //Default Import
import ReactDOM from "react-dom/client";
 import RestaturantCardComponent from "./RestaturantCardComponent" ;
 import restaurantList from "../utils/mockData";
import {useState } from "react";  //Named Import

 
 const BodyComponent =()=>{
    //Local State Variable  in React

      //Diff ways to write local state variable in React
    //Way=>1
    //  const arr=useState(restaurantList);  
    //  const [listOfRestaurants, setListOfRestaurant]=arr; //Destructuring of array

    //Way=>2
    // const [listOfRestaurants, setListOfRestaurant]=useState(restaurantList); //Destructuring of array

      //way=>3
      const arr1=useState(restaurantList);  
       const listOfRestaurants=arr1[0]; //first element of array
       const setListOfRestaurant=arr1[1]; //second element of array



    return (
      <div className="body"> 
       <div className="filter">
        <button className="filter-btn" onClick={()=>{
        // filtering the restaurants based on rating>4. is is pure JS filter code.
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4.5);
         setListOfRestaurant(filteredList);  //React way to update the local state variable
        }}
        >Top Rated Restaurants</button>
       </div>
       <div className="res-container"> 
      {listOfRestaurants.map((restaurant,index)=>
      ( <RestaturantCardComponent  key={index} resData={restaurant} />
      ))}
      </div>
      </div>
    );
  };

  export default BodyComponent;