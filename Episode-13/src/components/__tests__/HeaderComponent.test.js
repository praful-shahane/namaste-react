import { fireEvent, render , screen} from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("Should render Header Component with login button",()=>{

    render(
         <Provider store={appStore}>
        <BrowserRouter>
        <HeaderComponent/>
        </BrowserRouter>
       </Provider>
);
//way=>1
// const loginButton=screen.getByRole("button");

//way=>2
// const loginButton=screen.getByText("login");

//way=>3
//if we have n no. of button, i want to check login button.
const loginButton=screen.getByRole("button", {name:"Login"});

expect(loginButton).toBeInTheDocument();
  
});

it("Should render Header Component with Cart Item 0 ",()=>{

    render(
         <Provider store={appStore}>
        <BrowserRouter>
        <HeaderComponent/>
        </BrowserRouter>
       </Provider>
);

const cartItem = screen.getByText("Cart(0 items)")

expect(cartItem).toBeInTheDocument();
  
});

it("Should render Header Component with Cart any Item",()=>{

    render(
         <Provider store={appStore}>
        <BrowserRouter>
        <HeaderComponent/>
        </BrowserRouter>
       </Provider>
);

const cartItem = screen.getByText(/Cart/); //Instead of checking Cart(0 items)
//it will check only Cart is there or not using regex.

expect(cartItem).toBeInTheDocument();
  
});

it("Should chnaged Login button to LogOut on click",()=>{

    render(
         <Provider store={appStore}>
        <BrowserRouter>
        <HeaderComponent/>
        </BrowserRouter>
       </Provider>
);

//when JSDOM load, our button is Login.
const loginButton=screen.getByRole("button", {name:"Login"});

   //using fireEven, i click on loginbutton to change to logOut
     fireEvent.click(loginButton);
//getting LogOut button from JSDOM.
 const logOutButton=screen.getByRole("button", {name:"LogOut"});

 //checking logOutButton is there on JSDOM or not.
expect(logOutButton).toBeInTheDocument();
  
});