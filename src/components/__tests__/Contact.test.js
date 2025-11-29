import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us Page test case",()=>{

    //Before starting all Testcases inside the describe()
    //Before all code will be executed.
 beforeAll(()=>{
    // console.log("Before All");
    
 })
  //Before starting Each Testcases individually inside the describe()
    //Before Each code will be executed.
 beforeEach(()=>{
        //  console.log("Before Each");
 })

     //After ending all Testcases inside the describe()
    //After all code will be executed.
 afterAll(()=>{
    //  console.log("after All");
 })

   //After ending Each Testcases individually inside the describe()
    //After Each code will be executed.
  afterEach(()=>{
    //  console.log("after Each");
 })


    //testing whether our component load on DOM or not.
it("Should load contact us component",()=>{
    
    //render method used to render component on JS DOM.
    render(<Contact/>);

    //getting heading from Document using screen  which is loaded on DOM by render()
    const  heading=screen.getByRole("heading");

     //checking heading is available in loaded Document/DOM or not.
     //if yes, it will be pass testcase otherwise fail.
    expect(heading).toBeInTheDocument();
});

it("Should load button inside contact us component",()=>{
    
    //render method used to render component on JS DOM.
    render(<Contact/>);

    //getting button from Document using screen  which is loaded on DOM by render()
    // const  button=screen.getByRole("button");  or
    const button = screen.getByText("Submit");

     //checking button is available in loaded Document/DOM or not.
     //if yes, it will be pass testcase otherwise fail.
    expect(button).toBeInTheDocument();
});
});




it("Should load input name inside contact us component",()=>{
    
    //render method used to render component on JS DOM.
    render(<Contact/>);

    //getting inputName from Document using screen  which is loaded on DOM by render()
    const inputName = screen.getByPlaceholderText("name");

     //checking button is available in loaded Document/DOM or not.
     //if yes, it will be pass testcase otherwise fail.
    expect(inputName).toBeInTheDocument();
});

it("Should load 2 input boxes inside contact us component",()=>{
    
    //render method used to render component on JS DOM.
    render(<Contact/>);

    //getting inputName from Document using screen  which is loaded on DOM by render()
    //Querying
    const inputBoxes = screen.getAllByRole("textbox"); //role of input tag is textbox 
    //it return JSX Element from screen

    console.log(inputBoxes.length);

    expect(inputBoxes.length).not.toBe(3);
});