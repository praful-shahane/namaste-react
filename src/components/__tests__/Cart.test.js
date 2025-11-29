import {act, fireEvent, render ,screen} from "@testing-library/react";
import RestaurantMenuCard from "../RestaurantMenuCard";
import HeaderComponent from "../HeaderComponent";
import CartComponent from "../CartComponent";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch =  jest.fn(()=>
     Promise.resolve({
         json:  () => Promise.resolve(MOCK_DATA_NAME)
})
)

it("Should Load Restaurant menu Component",async ()=>{

    await act( async ()=> render( 
        <BrowserRouter>
        <Provider store={appStore} >
  <HeaderComponent/>
<RestaurantMenuCard  />
<CartComponent/>
        </Provider>
        </BrowserRouter>
 ))

  const accordianHeader=screen.getByText("Dosa (11)");
  fireEvent.click(accordianHeader);

 const foodItemsLength = screen.getAllByTestId("foodItems").length;
 expect(foodItemsLength).toBe(11);

   expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();

    //click on add btn on menu Item
  const addbtn= screen.getAllByRole("button", {name : "Add +"});
  console.log(addbtn.length);
  
   fireEvent.click(addbtn[0]); //click on first button.
   //My headerComponent's cart should chnahge to one items.
    //so, we need Header Component to be render with RestaurantMneucard component.'

    //now total cart item will be 1.
  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

  //add one more item into cart
  fireEvent.click(addbtn[1]);
   
    //now total cart item will be 2.
    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();

     //Checking cart contain 2 items or not(total fooditem will be 11(from menu items)+ 2(from cart))
    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    //click on clear cart
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    //Now total =>fooditem id will be 11
    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    //once cart empty we display below message.
    expect(screen.getByText("Your Cart is Empty add ietms to teh cart")).toBeInTheDocument();

});