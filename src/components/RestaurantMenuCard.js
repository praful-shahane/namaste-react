import { useState,useEffect, use}from "react"; 
import ShimmerComponet from "./ShimmerComponent";
import{useParams} from "react-router";
import { MENU_API_URL } from "../utils/constants";  


const RestaurantMenuCard =()=>{


/*
we don't have dependency array here, so useEffect will be called every time after the component is rendered.
If we want to call useEffect only once after the first render, we have to provide empty dependency array.
i do not want to call useEffect every time after the component is rendered.
So, we have to provide empty dependency array.
*/
 const [resInfo,setResInfo]=useState(null);
const {resId,resName}= useParams();  //destructuring to get resId,resName directly.
console.log(resId,resName); //resId=nagpur resName=veeraswami-sadar

  

           useEffect(
            ()=>{
                console.log("Calling fetch menu");
             fetchMenu();
            },[]);

            const fetchMenu = async ()=>{
                console.log("fetchin api");
                
                const data = await fetch(
                MENU_API_URL+resId+"/"+resName+"/order&location=&isMobile=0"
                          );         
            const jsonData= await data.json();
            console.log(jsonData);
            
             setResInfo(jsonData.page_data);
            };
            if(resInfo===null)return <ShimmerComponet/>;
            
            // console.log(resInfo.sections.SECTION_BASIC_INFO);

           const itemCards=resInfo?.order?.menuList?.menus[0].menu.categories[0].category.items;

             console.log( resInfo?.order?.menuList?.menus[0].menu.categories[0].category.items);
             
             console.log(itemCards);
             
             
   

    return (
        <div className="menu">
          <h1>{resInfo.sections.SECTION_BASIC_INFO.name}</h1>
         <h3>{resInfo.sections.SECTION_BASIC_INFO.cuisine_string}</h3>
        <h2>Menu</h2>
        <ul>

            { itemCards.map((res) =>
                 (<li key={res.item.id}>
                    {res.item.name} - {"Rs."} {res.item.price || res.item.default_price}
                    </li>))}
                  
        </ul>
        </div>
    );
};

export default RestaurantMenuCard;