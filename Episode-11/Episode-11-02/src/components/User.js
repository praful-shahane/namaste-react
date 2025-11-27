import {useEffect, useState} from "react";


const User =({name})=>{

    const [count, setCount] =useState(0); //0 is initial value
    const [count2] =useState(1); //1 is initial value

    useEffect(()=>{
        console.log("Use Effect logs");
        
          //API call
          //setINterval function to print Namaste React every second
        const timer=  setInterval(()=>{
           console.log("Namaste  React in Functional Component");
           
       },1000);
          return ()=>{
            //return will be called when we leave the component/page
            console.log("Cleanup function called in Functional Component");
            
            //cleanup function to clear the interval
            clearInterval(timer);

          }
    },[]); 

    console.log("render");
    
  useEffect(()=>{
          //API call
          getUserInfo();
    },[count2]); //count2 is dependency array. Whenver count2 changes,useEffect will be called

    async function getUserInfo() {
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        
    }



    const incrementCount =()=>{
        setCount(count+1);
    }
     const decrementCount =()=>{
        setCount(count-1);
    }
      const resetCount =()=>{
        setCount(0);
    }

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={incrementCount}>Click to increment value of Count</button>
             <button onClick={decrementCount}>Click to decrement value of Count</button>
              <button onClick={resetCount}>Click to reset value of Count</button>
            <h1>Count = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Nagpur</h3>
            <h4>Contact: @akshaymarch7</h4>

        </div>
    );
}

export default User;