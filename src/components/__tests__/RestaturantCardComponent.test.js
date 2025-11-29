import { render ,screen} from "@testing-library/react";
import RestaturantCardComponent, { withDiscountRestaurantMenuCard } from "../RestaturantCardComponent";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data",()=>{

    render(
       <RestaturantCardComponent  resData={MOCK_DATA} />
    );
    //get name from JSDOM document
   const name= screen.getByText("Olio - The Wood Fired Pizzeria");

   expect(name).toBeInTheDocument();

});


it("Should render RestaurantCard component with Discount label",()=>{
        const RestaturantCardComponentWithDiscount= withDiscountRestaurantMenuCard(RestaturantCardComponent);
     
      render(
        <RestaturantCardComponentWithDiscount   resData={MOCK_DATA} />
      )

    //get name from JSDOM document
   const name= screen.getByText("Olio - The Wood Fired Pizzeria");
        expect(name).toBeInTheDocument();
});
