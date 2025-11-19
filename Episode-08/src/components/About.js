import User from "./User";
import Userclass from "./UserClass";
import {Component} from "react";

class About extends Component {

         constructor(props){
            super(props);
         //   console.log("About Constructor parent");

         }
        componentDidMount(){
          //  console.log("About componentDidMount parent ");
         }

    render(){
      //  console.log("About render method parent ");
        
        return(
             <div>
            <h1>About Us Page</h1>
            <p>This is Namaste React Live Course 2023</p>
            <p>We are learning React JS</p>
                <User name={"First"}/>
             <Userclass name={"First (Class)"}  location={"Nagpur class"}/>
        </div>
        );
    }
}

/*
const About=()=>{
    return(
        <div>
            <h1>About Us Page</h1>
            <p>This is Namaste React Live Course 2023</p>
            <p>We are learning React JS</p>
             <User name={"Rahul Mahajan"}/>
             <Userclass name={"Rahul Mahajan (Class)"} 
                     location={"Nagpur class"}/>
        </div>
    )
}
 */

export default About;