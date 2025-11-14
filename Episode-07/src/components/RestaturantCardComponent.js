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
      <div className="res-card" style={{ backgroundColor:"#aca51fff"}}> 
      <img  className="res-logo"
      alt="res-logo" 
      src={
      CDN_URL
       +cloudinaryImageId
      }/>
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      </div>
    );
  };

  export default RestaturantCardComponent;