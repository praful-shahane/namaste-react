
import React from "react";
class UserClass extends React.Component {
    
    //Use constructor to access props
    //to get data dyanamically from parent component
    constructor(props){
        super(props);
        
        this.state={
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url:"https://dummy.com",
            }
               
            
        };
    console.log(this.props.name+" child constructor called in UserClass");
     }

    async componentDidMount(){
       console.log(this.props.name+ " child componentDidMount method called in UserClass");

      //this.timer is an variable created to hold the interval ID
       this.timer=setInterval(()=>{
           console.log("Namaste  React");
           
       },1000);

       /*
        //API call
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json= await data.json();
        console.log(json);

        //Once data is fetched from API, we will update the latest data into  the state variable
        this.setState({
            userInfo: json,
        });
        */

     }

     componentDidUpdate(prevProps, prevState){
       console.log(this.props.name+ " child componentDidUpdate method called in UserClass");
      
        //if location has changed or if name   has changed then only make API call 
       if(this.state.userInfo.location !== prevState.userInfo.location || this.props.userInfo.name !== prevState.userInfo.name){
        //API Call
        console.log("Location changed from "+ prevState.userInfo.location + " to "+ this.state.userInfo.location);
       }

         if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
        //API Call
        console.log("Count/Count2 changed");
       }

     }

     componentWillUnmount(){
         console.log(this.props.name+ " child componentWillUnmount method called in UserClass");

        //passing timer variable to stop the interval
         clearInterval(this.timer); //to clear the interval created in componentDidMount
     }
    render(){
 
        const {name, location,avatar_url} = this.state.userInfo;

       console.log(this.props.name+" child Render method called in UserClass");
        
       return(
        <div className="user-card">
            <img src={avatar_url} alt="User Avatar" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>

        </div>
    );
    }

}

export default UserClass;

/*
MOUNTING PHASE (Birth of Component)
===============================
Constructor(Dummy data)
Render(Dummy data)
          <HTML on UI with Dummy data> 

 ComponentDidMount called
        make API Call

Updating Phase (Growth of Component)
===============================
 
 when this.SetState is called(set Latest data from API to state variable)
 Render (render happens with Latest data of state variable)
 <HTML on UI with Latest data>
componentDidUpdate called 

*/