import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    //try to check if user's internet connection is online or offline

   const [onlineStatus, setOnlineStatus]= useState(true);//initially true

     //we need to add event listeners for online and offline events.
     //for only one time we need to add event listeners, so we will use useEffect with empty dependency array.
    useEffect(()=>{
         //so, i will put the event listeners on to the web page only once when the component is mounted.
         //then it will keep listening for online and offline events.
         window.addEventListener("offline",()=>{
            console.log("You are offline");
            setOnlineStatus(false); //set onlineStatus to false
         });
         window.addEventListener("online",()=>{
            console.log("You are online");
            setOnlineStatus(true); //set onlineStatus to true
         });
    },[]); //empty dependency array to call useEffect only once after first render
     
    //return true/false
    return onlineStatus;

};

export default useOnlineStatus;