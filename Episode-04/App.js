  import React from "react";
  import ReactDOM from "react-dom/client";
   

  /*
  Low Level Planning of the App
  ==============================
Header Component
   - Logo Component
   - Nav Items Component
Body Component
 - Search Component
 -Restro Container Component
   - Restro Card Component
     -image
     -name
     -star rating
     -cuisine
     -time for delivery
Footer Component
  -Copyright Component
  -Links Component
  -Address Component
  -Contact Component

  */

  const HeaderComponent =()=>{
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  />
          </div>
          <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li> 
              </ul>
          </div>
         </div>
    );
  };

  const RestaturantCardComponent =(props)=>{
    const {resData} =props;  //restData is an key which we need to map with restaurantList array of objects
    console.log(resData);
       
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
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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
  

  //list of restaurants from swiggy api
  const restaurantList = [
{
"info": {
"id": "634150",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/55c73d88-f04a-4cd5-a78d-707e5b423463_634150.JPG",
"locality": "RT Nagar",
"areaName": "RT Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "1040",
"avgRatingString": "4.5",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "15% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "91"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/theobroma-rt-nagar-rest634150",
"type": "WEBLINK"
}
},
{
"info": {
"id": "405730",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Sahakara Nagar",
"areaName": "Sahakar Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "61955",
"avgRatingString": "4.3",
"totalRatingsString": "5.4K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "2.5",
"ratingCount": "34"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/chinese-wok-sahakara-nagar-sahakar-nagar-rest405730",
"type": "WEBLINK"
}
},
{
"info": {
"id": "12810",
"name": "A2B - Adyar Ananda Bhavan",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/a74e5191-7de1-44e2-8a2a-2c9e42cc2dea_12810.JPG",
"locality": "RT Nagar",
"areaName": "Sanjay Nagar, New BEL Road",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"North Indian",
"Sweets",
"Chinese"
],
"avgRating": 4.5,
"veg": true,
"parentId": "22",
"avgRatingString": "4.5",
"totalRatingsString": "45K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-South%20Indian.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹349",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "7.9K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-rt-nagar-sanjay-nagar-new-bel-road-rest12810",
"type": "WEBLINK"
}
},
{
"info": {
"id": "14555",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bf28911d-a318-4bb2-b435-451293644094_14555.JPG",
"locality": "RT Nagar",
"areaName": "RT Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹98"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "1.5K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/pizza-hut-rt-nagar-rest14555",
"type": "WEBLINK"
}
},
{
"info": {
"id": "409506",
"name": "BOX8 - Desi Meals",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1aba7063-4c6e-4e99-99a5-8f4963fcbe5e_409506.jpg",
"locality": "Ex Servicemen Colony",
"areaName": "RT Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"North Indian",
"Biryani",
"Thalis",
"Home Food"
],
"avgRating": 4.4,
"parentId": "10655",
"avgRatingString": "4.4",
"totalRatingsString": "2.8K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/box8-desi-meals-ex-servicemen-colony-rt-nagar-rest409506",
"type": "WEBLINK"
}
},
{
"info": {
"id": "333153",
"name": "Baskin Robbins - Ice Cream Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/6b6c778b-c9bf-4027-9541-ca1ff970cead_333153.JPG",
"locality": "Dinnur Main Road",
"areaName": "R T Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Desserts",
"Ice Cream"
],
"avgRating": 4.7,
"veg": true,
"parentId": "5588",
"avgRatingString": "4.7",
"totalRatingsString": "812",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-dinnur-main-road-r-t-nagar-rest333153",
"type": "WEBLINK"
}
},
{
"info": {
"id": "409512",
"name": "NH1 Bowls - Highway To North",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/9e954107-89ba-4767-a8d8-0fbef8aac1ea_409512.jpg",
"locality": "Ex Serviceman Colony",
"areaName": "RT Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"Punjabi",
"Home Food"
],
"avgRating": 4.3,
"parentId": "22452",
"avgRatingString": "4.3",
"totalRatingsString": "914",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-ex-serviceman-colony-rt-nagar-rest409512",
"type": "WEBLINK"
}
},
{
"info": {
"id": "740475",
"name": "Hola Pasta - Fresh Gourmet Pasta",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740475.JPG",
"locality": "Ex Servicemen Colony",
"areaName": "RT Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.2,
"parentId": "418135",
"avgRatingString": "4.2",
"totalRatingsString": "147",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹109"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/hola-pasta-fresh-gourmet-pasta-ex-servicemen-colony-rt-nagar-rest740475",
"type": "WEBLINK"
}
},
{
"info": {
"id": "385539",
"name": "Andhra Gunpowder",
"cloudinaryImageId": "xue2epege8dwwastvtnt",
"locality": "Manorampalya",
"areaName": "RT Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Andhra",
"Biryani",
"South Indian"
],
"avgRating": 4.6,
"parentId": "10496",
"avgRatingString": "4.6",
"totalRatingsString": "6.1K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-manorampalya-rt-nagar-rest385539",
"type": "WEBLINK"
}
},
{
"info": {
"id": "652870",
"name": "Dum Safar Biryani",
"cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
"locality": "HEBBAL",
"areaName": "RMZ AZUR",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Kebabs",
"North Indian",
"Barbecue"
],
"avgRating": 4.1,
"parentId": "351013",
"avgRatingString": "4.1",
"totalRatingsString": "351",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 4.9,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/dum-safar-biryani-hebbal-rmz-azur-rest652870",
"type": "WEBLINK"
}
},
{
"info": {
"id": "263739",
"name": "Veg Meals By LunchBox",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/2d5c597e-ab1b-43ad-b83e-aa0a8d8cd7f7_263739.JPG",
"locality": "80 ft Road",
"areaName": "RT Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Thalis",
"North Indian",
"Biryani",
"South Indian",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"veg": true,
"parentId": "21938",
"avgRatingString": "4.3",
"totalRatingsString": "247",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/veg-meals-by-lunchbox-80-ft-road-rt-nagar-rest263739",
"type": "WEBLINK"
}
},
{
"info": {
"id": "80802",
"name": "Third Wave Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/9ebf7373-a301-4641-a60c-29ddcb73186c_80802.JPG",
"locality": "Sadashiva Nagar",
"areaName": "Sadashiva Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Bakery",
"Continental"
],
"avgRating": 4.4,
"parentId": "274773",
"avgRatingString": "4.4",
"totalRatingsString": "4.8K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "ABOVE ₹1200",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "2.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/third-wave-coffee-sadashiva-nagar-rest80802",
"type": "WEBLINK"
}
},
{
"info": {
"id": "409511",
"name": "ZAZA Mughal Biryani",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/6f16df13-d73b-42d3-a2e8-c1b9c1d1ac94_409511.jpg",
"locality": "Ex Serviceman Colony",
"areaName": "RT Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Biryani",
"North Indian",
"Awadhi"
],
"avgRating": 4.2,
"parentId": "22473",
"avgRatingString": "4.2",
"totalRatingsString": "757",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-ex-serviceman-colony-rt-nagar-rest409511",
"type": "WEBLINK"
}
},
{
"info": {
"id": "333800",
"name": "RNR Biryani - Taste of 1953",
"cloudinaryImageId": "n7has2d95kl7boo33ogy",
"locality": "ITI Layout",
"areaName": "New BEL Road",
"costForTwo": "₹350 for two",
"cuisines": [
"Biryani",
"South Indian",
"Kebabs"
],
"avgRating": 4.5,
"parentId": "11620",
"avgRatingString": "4.5",
"totalRatingsString": "9.8K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-iti-layout-new-bel-road-rest333800",
"type": "WEBLINK"
}
},
{
"info": {
"id": "349727",
"name": "Paris Panini - Gourmet Sandwiches & Wraps",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/3f84f570-a8c3-4988-a53e-866b2f98d912_349727.jpg",
"locality": "Sanjay Nagar",
"areaName": "Sanjay Nagar, New BEL Road",
"costForTwo": "₹500 for two",
"cuisines": [
"sandwich",
"wrap",
"Fast Food",
"Pastas",
"Italian",
"Salads",
"Healthy Food",
"Desserts",
"Continental"
],
"avgRating": 4.6,
"parentId": "21019",
"avgRatingString": "4.6",
"totalRatingsString": "9.8K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Sandwiches.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "219"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-sanjay-nagar-sanjay-nagar-new-bel-road-rest349727",
"type": "WEBLINK"
}
},
{
"info": {
"id": "23843",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/5e6eb1de-d190-4290-bf8b-e8c9e7c603ea_23843.JPG",
"locality": "RT Nagar",
"areaName": "RT Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "28K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "1.5",
"ratingCount": "<3"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/dominos-pizza-rt-nagar-rest23843",
"type": "WEBLINK"
}
},
{
"info": {
"id": "560792",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b945185d-fa16-415e-a378-36e9ee18ca30_560792.JPG",
"locality": "Ganganagar",
"areaName": "RT Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.3,
"parentId": "630",
"avgRatingString": "4.3",
"totalRatingsString": "6.7K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 06:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mcdonalds-ganganagar-rt-nagar-rest560792",
"type": "WEBLINK"
}
},
{
"info": {
"id": "17304",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/224357cc-560f-4043-82fc-fe640464ed1a_17304.JPG",
"locality": "Ganganagar",
"areaName": "R T Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.1,
"parentId": "547",
"avgRatingString": "4.1",
"totalRatingsString": "23K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kfc-ganganagar-r-t-nagar-rest17304",
"type": "WEBLINK"
}
},
{
"info": {
"id": "548402",
"name": "Taco Bell",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/65e29190-a052-4d70-9c3b-5744f7bb1efa_548402.JPG",
"locality": "Chikkamaranahalli",
"areaName": "New BEL Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Mexican",
"Fast Food",
"Snacks"
],
"avgRating": 4.3,
"parentId": "1557",
"avgRatingString": "4.3",
"totalRatingsString": "3.3K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "156"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/taco-bell-chikkamaranahalli-new-bel-road-rest548402",
"type": "WEBLINK"
}
},
{
"info": {
"id": "18974",
"name": "Nandhana Palace",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/0feef1d4-2a66-43a9-8fef-825997de330a_18974.jpg",
"locality": "Lower Parel",
"areaName": "Mathikere- BELÂroad",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Andhra",
"South Indian",
"North Indian"
],
"avgRating": 4.5,
"parentId": "2120",
"avgRatingString": "4.5",
"totalRatingsString": "59K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-09 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "10K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-92d73e40-24b0-4646-900b-f9816b552a8d"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/nandhana-palace-lower-parel-mathikere-bel-road-rest18974",
"type": "WEBLINK"
}
}
]
  const resObj={
"id": "634150",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/55c73d88-f04a-4cd5-a78d-707e5b423463_634150.JPG",
"locality": "RT Nagar",
"areaName": "RT Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "1040",
"avgRatingString": "4.5",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 14,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-08 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "15% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "91"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
};

  const BodyComponent =()=>{
    return (
      <div className="body"> 
       <div className="search">Search </div>
       <div className="res-container"> 
      {restaurantList.map((restaurant,index)=>
      ( <RestaturantCardComponent  key={index} resData={restaurant} />
      ))}
      </div>
      </div>
    );
  };
const AppLayOut =()=>{
  return (
  <div className="app">
    <HeaderComponent />
     <BodyComponent />
  </div>);
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);