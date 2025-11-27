 import React from "react";  //Default Import
import ReactDOM from "react-dom/client";
 import RestaturantCardComponent, {withDiscountRestaurantMenuCard} from "./RestaturantCardComponent" ;
import {useState, useEffect } from "react";  //Named Import
import ShimmerComponet from "./ShimmerComponent";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
 
 const BodyComponent =()=>{
    //Local State Variable  in React
   // const arr1=useState(restaurantList);   //to set mockData initially before API data loads.
    const arr=useState([]);  //Initially empty array before API data loads. 
     const [listOfRestaurants, setListOfRestaurant]=arr; //Destructuring of array
    const[searchText, setSearchText]= useState(""); //Local State Variable for search box
    const[filteredRestaurants, setFilteredRestaurants]= useState([]); //Local State Variable for filtered restaurant list.
     //Whenever React's state variables update, React triggers a reconciliation cycle(Re-Renders the Component)
console.log("Body rendered...");

console.log(listOfRestaurants);

//created a new component RestaurantMenuCardWithDiscount using Higher Order Component
const RestaurantMenuCardWithDiscount= withDiscountRestaurantMenuCard(RestaturantCardComponent);


// // not good practice to create state variable inside conditional block
//   if(true){ 
//   const[searchText, setSearchText]= useState(""); //Local State Variable for search box
//   }

// // Do not create state variable inside function or loop or conditional block
//    function test(){
//        const[searchText, setSearchText]= useState(""); //Local State Variable for search box
//    }

//     for(let i=0;i<10;i++){
//       const[searchText, setSearchText]= useState(""); //Local State Variable for search box
//     }


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
      console.log(jsonData);
      
      console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      //set the data which we fetch from API to the local state variable
            
 
      //Optional Chaining Operator (?.) is used to avoid runtime errors if any property is undefined or null.
   
      setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 


      //when we fetch the data from API, we have to set the filtered restaurant list also.
      //Earilier i use API::1 to fetch data. but now i am using API::2
      setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


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

      const onlineStatus= useOnlineStatus();
      if(onlineStatus===false){
        return( <h1>
          🔴 Offline, Please check your internet connection!!
          </h1>);
      }

    return     listOfRestaurants.length===0 ? <ShimmerComponet/> : (
      <div className="body"> 
       <div className="flex m-4 p-4">
        <div  className="search m-4 p-4">
            <input  type="text"  className="border border-solid border-black"  value={searchText} 
              onChange={ (e)=>{
                   setSearchText(e.target.value);
              }} />
             <button  className="px-4 py-2 bg-green-200 mx-4 rounded-3xl"
             onClick={()=>{ //Filter the restaurant cards & update the UI.  //we need searchText here ignore case.
const filterRestaurantList=listOfRestaurants.filter(res=>
 res.info.name.toLowerCase().includes(searchText.toLowerCase())
);    
//update the restaurant list by filtered restaurant list.
 setFilteredRestaurants(filterRestaurantList); }}
             >Search</button>
        </div>

     <div className="flex m-4 p-4">
 <button className="px-4 py-2 bg-gray-200 rounded-3xl" onClick={()=>{
        // filtering the restaurants based on rating>4. is is pure JS filter code.
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4.5);
         setFilteredRestaurants(filteredList);  //React way to update the local state variable
        }}
        >Top Rated Restaurants</button>
     </div>
       
       </div>
       <div className="mx-4 px-4 flex flex-wrap"> 
      {filteredRestaurants.map((restaurant)=>
      (     
      <Link 
         key={restaurant.info.id}
       to={"/restaurant/"+restaurant.info.id+"/"+restaurant.info.name}   >

       {/* {if Restaurant have discount then add a discount  offer on the scard.} */
       /* if aggregatedDiscountInfoV3 is undefined then  */
  
       
          restaurant.info.aggregatedDiscountInfoV3 !==undefined ?
           ( <RestaurantMenuCardWithDiscount  resData={restaurant} />)
            :
            ( 
            <RestaturantCardComponent  resData={restaurant} />
          )
        }
       
      </Link>
      
      ))}
      </div>
      </div>
    );
  };

  export default BodyComponent;