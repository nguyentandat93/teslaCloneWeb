import React from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (
    <div className="App">
      <Header />
      <Section 
        title={"Model S"}
        desc={"Order Online for Toucheless Delivery"}
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
        imageBG={"model-s.jpg"}
      />
      <Section 
        title={"Model X"}
        desc={"Order Online for Toucheless Delivery"}
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
        imageBG={"model-x.jpg"}
      />
      <Section 
        title={"Model 3"}
        desc={"Order Online for Toucheless Delivery"}
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
        imageBG={"model-3.jpg"}
      />
      <Section 
        title={"Model Y"}
        desc={"Order Online for Toucheless Delivery"}
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
        imageBG={"model-y.jpg"}
      />
      <Section 
        title={"Solar Panels"}
        desc={"Lowest Cost Solar Panels in America"}
        leftBtnText={"Order Now"}
        rightBtnText={"Learn More"}
        imageBG={"solar-panel.jpg"}
      />
      <Section 
        title={"Solar Roof"}
        desc={"Produce Clean Energy From Your Roof"}
        leftBtnText={"Order Now"}
        rightBtnText={"Learn More"}
        imageBG={"solar-roof.jpg"}
      />
      <Section 
        title={"Accessories"}
        leftBtnText={"Shop Now"}
        imageBG={"accessories.jpg"}
      />


    </div>
  );
}

export default App;
