# namaste react

# Namaste Food

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

  # React Hooks
   (it is Normal JS utility functions. 
   Facebook developer wrote this function inside the React)


  # Redux Toolkit
    -STEPS
    ---------------
    - Install @reduxjs/toolkit +  react-redux
    -Build our own store.
    -Connect our store to our app.
    -Create slice(Cart slice)
    -dispatch(action)
    -Selector
    
# Type of Testing (Developer can do)
  -UnitTesting
  -Integration testing
  -End to End Testing(E2E Testing)

   -UnitTesting means we test our React Component in isolation or individual Component.
    only specific Component we  can test.

   -Integration testing means testing the integration of components.
    there are multiple components & they are talking to each other & we will develop a flow of an action in ojur react app
    that we will test.
   ex:- my application has 20 cards, i will search pizza in search box, we get only Three cards, this type of testing is integration testing.
    we will write code for this flow.

    -End To Testing means testing a React application as soon as user lands on the website to the user leaves the website.
    we will test all the flows.
    it requires some tools like cypress,etc.

    as a developer we concrened about only first 2 types of testing.
     in some companies testing is part of code.

# Setting up Testing in our App
 -install React testing library
 -Install JEST
 -Install Babel dependencies bcz our parcel uses babel.
 -Configure babel by creating one file at root level.
 -Configure  parcel config file to disable default babel transpilation.
 -JEST configuration.  npm init jest@latest
 -install jsdom library.
 -Install @babel/preset-react - to make JSX work in test cases.
  -Include @babel/preset-react inside my babel config.
 -Install @testing-library/jest-dom
 

   
