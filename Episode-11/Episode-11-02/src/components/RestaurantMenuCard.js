
import ShimmerComponet from "./ShimmerComponent";
import{useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";

const RestaurantMenuCard =()=>{
/*
we don't have dependency array here, so useEffect will be called every time after the component is rendered.
If we want to call useEffect only once after the first render, we have to provide empty dependency array.
i do not want to call useEffect every time after the component is rendered.
So, we have to provide empty dependency array.
*/
const {resId,resName}= useParams();  //destructuring to get resId,resName directly.
console.log(resId,resName); //resId=nagpur resName=veeraswami-sadar

    const resInfo= useRestaurantMenu(resId,resName);  //calling custom hook useRestaurantMenu and passing resId,resName as input

    if(resInfo===null)return <ShimmerComponet/>;
    
      const itemCards=resInfo?.order?.menuList?.menus[0].menu.categories[0].category.items;
            console.log( resInfo?.order?.menuList?.menus[0].menu.categories[0].category.items);
            console.log(itemCards);

               //getting categories list from resInfo object.
               //it contains array of categories with items.
            const categoriesItemsList= resInfo.order.menuList.menus;
            console.log(categoriesItemsList);
            
       
    return (
      
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl" >{resInfo.sections.SECTION_BASIC_INFO.name}</h1>
         <h3 className="font-bold text-lg" >{resInfo.sections.SECTION_BASIC_INFO.cuisine_string}</h3>
            
                        {
                          // iterating over categoriesItemsList array to render RestaurantCategoryComponent for each category.
             categoriesItemsList.map((category)=>(
                          // passing category data as prop to RestaurantCategoryComponent
                          // key is unique id for each category to help react identify which items have changed, are added, or are removed.
                       <RestaurantCategoryComponent  key={category.menu.id} data={category.menu} />
             ))} 
        </div>
    );
};
export default RestaurantMenuCard;