
import ItemListComponent from "./ItemListComponent";

//passing data,showItems,setShowIndexToShowCategory as props from parent component
const RestaurantCategoryComponent =({data, showItems, setShowIndexToShowCategory})=>{

    console.log(data);
console.log(data.categories[0].category.items);
//I want to show items by giving control to parent component RestaurantMenuCard

const handleClick=()=>{
    console.log("Category clicked");
    //Call setShowIndex function passed from parent component
     setShowIndexToShowCategory();
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