
import ItemListComponent from "./ItemListComponent";
import {useState} from "react";

const RestaurantCategoryComponent =({data})=>{

    console.log(data);
console.log(data.categories[0].category.items);

//State variable to track whether to show items or not
const [showItems, setShowItems] = useState(false);

      
const handleClick=()=>{
    console.log("Category clicked");
     //Write logic to toggle showItems value
     //if showItems is true, set it to false
     //if showItems is false, set it to true
     //this is toggle functionality
     setShowItems(!showItems);
};


    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" >
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
              <span  className="font-bold text-lg" >{data.name} ({data.categories[0].category.items.length})</span>
               <span>+</span>
            </div>
            {   //If showItems is true then only render ItemListComponent
               //if showItems is false then do not render ItemListComponent
                showItems &&  <ItemListComponent items={data.categories[0].category.items}/>
            }
                
           </div>
        </div>
    );

};

export default RestaurantCategoryComponent;