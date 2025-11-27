import { CDN_URL } from "../utils/constants";

const RestaturantCardComponent =(props)=>{
    const {resData} =props;  //restData is an key which we need to map with restaurantList array of objects
       
    //Destructuring of our object
    // const cloudinaryImageId = resData.info.cloudinaryImageId;
       const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
          } = resData?.info;  
       // ? is for optional chaining

    
    return(
      <div className="m-4 p-4 w-[250px] bg-gray-150 hover:bg-gray-400"> 
      <img  className="rounded-lg"
      alt="res-logo" 
      src={
      CDN_URL
       +cloudinaryImageId
      }/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      </div>
    );
  };


  //Higher order component

//input - RestaurantMenuCard
//output - RestaurantMenuCardDiscountOffer

 export const withDiscountRestaurantMenuCard =(RestaurantMenuCard)=>{ 

         //props are passed from BodyComponent to RestaurantMenuCardWithDiscount
         //then from RestaurantMenuCardWithDiscount to RestaurantMenuCard
         //...props is used to pass all the props at once.
            return (props)=>{
                       return (
                        <div className="border-[1px] "> 
                          <label  className=" absolute text-white bg-black" >Discount</label>
                          <RestaurantMenuCard {...props}/>
                        </div>
                       );
            };
};

  export default RestaturantCardComponent;