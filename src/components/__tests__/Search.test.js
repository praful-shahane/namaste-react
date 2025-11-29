import { render ,act,screen, fireEvent } from "@testing-library/react";
// import {act } from "react-dom/test-utils"; //Deprecated
import BodyComponent from "../BodyComponent";
import { jsx } from "react/jsx-runtime";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter, ScrollRestoration  } from "react-router-dom";
import "@testing-library/jest-dom"
/*
We are trying to make fetch function exactly like our orginal fetch function.
original fetch function return a promise & that promise return us a json
& we convert into json & then it return a promise once again.
when we resolve that promise then we actually get the data.

*/
global.fetch=  jest.fn(()=>{

    //fetch function return a promise
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("Should Search resList for pizza input",async ()=>{

    /* act function return a promise, so we need to add await for act().
    we need to add async for it()'s callback function.
    act takes callback function this again async function. 
    then async function render our component
   */ 
    await act( async ()=> render(
        <BrowserRouter>
            <BodyComponent/>
            </BrowserRouter>
));

   //Before searching, my rescard must be 20.
   const cardsBeforeSearch= screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(20);

//search button is there or not.
const searchBtn=screen.getByRole("button", {name: "Search"});

 const searchInput = screen.getByTestId("searchInput");

 //Typing inpput into input buttton & passing  value key inside the target object.
 //so that our code can access it as e.target.value
  fireEvent.change(searchInput,{target: 
                                {value:"Pizza"}
                                });
//click on search buton.
  fireEvent.click(searchBtn);

  //Now i expect 2 card to be loaded on JSDOM.
/* we have list of cards, to identify each card by commanality,
we finding using testId. add one resCard as id in RestaurantCardComponent.js
*/
  const cardsAfterSearch= screen.getAllByTestId("resCard");
expect(cardsAfterSearch.length).toBe(2);
});



it("Should filter top rated restaurant",async ()=>{

    /* act function return a promise, so we need to add await for act().
    we need to add async for it()'s callback function.
    act takes callback function this again async function. 
    then async function render our component
   */ 
    await act( async ()=> render(
        <BrowserRouter>
            <BodyComponent/>
            </BrowserRouter>
));

   //Before searching, my rescard must be 20.
   const cardsBeforeFilter= screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(20);

  //find top rated restaurant button.
const topRatedResBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

//click on that topRatedResBtn button
fireEvent.click(topRatedResBtn);

  const cardsAfterFilter= screen.getAllByTestId("resCard");
  console.log(cardsAfterFilter.length);
  
  
expect(cardsAfterFilter.length).toBe(3);

});