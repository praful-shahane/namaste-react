import {  useState,useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";  

const useRestaurantMenu = (resId,resName) => { //input is resId,resName

         //fetching restaurant menu data from api
          //resInfo state variable to hold restaurant menu data. null is initial value
          const [resInfo,setResInfo]=useState(null); 
          console.log(resId,resName);
          

             useEffect(()=>{
                         console.log("Calling fetch menu");
                        fetchData();
                    },[]); //empty dependency array to call useEffect only once after first render

              const fetchData = async ()=>{
                console.log("fetching api");
                
                const data = await fetch(
                MENU_API_URL+resId+"/"+resName+"/order&location=&isMobile=0"
                          );         
            const jsonData= await data.json(); //converting fetched data to json format
            console.log(jsonData);
            
            //updating resInfo state variable with fetched data from api
             setResInfo(jsonData.page_data);
            };

    return resInfo; //returning resInfo as output of custom hook
};
export default useRestaurantMenu;

