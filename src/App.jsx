import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import SupportButton from "./components/SupportButton";

function App() {
  return (
    <div className="app">

      <Navbar/>


      <section className="hero">

        <div className="hero-content">

          <h1>
            Great Food
            <br/>
            Better Moments
          </h1>

          <p>
            Experience delicious meals,
            elegant atmosphere and unforgettable
            dining moments.
          </p>


          <button className="reserve">
            Reserve A Table
          </button>

        </div>

      </section>



      <section className="features">

        <div>
          <h3>🥬 Fresh Ingredients</h3>
          <p>
            Only the finest ingredients
            prepared daily.
          </p>
        </div>


        <div>
          <h3>🍷 Cozy Atmosphere</h3>
          <p>
            Perfect place for family
            and friends.
          </p>
        </div>


        <div>
          <h3>👨‍🍳 Expert Chefs</h3>
          <p>
            Meals prepared by
            world-class chefs.
          </p>
        </div>

      </section>



      <section className="menu">

        <h2>
          Our Signature Dishes
        </h2>


        <div className="cards">

          <div className="card">
            <h3>Grilled Salmon</h3>
            <p>₦8,500</p>
          </div>


          <div className="card">
            <h3>Beef Steak</h3>
            <p>₦10,000</p>
          </div>


          <div className="card">
            <h3>Chicken Alfredo</h3>
            <p>₦7,500</p>
          </div>


          <div className="card">
            <h3>Jollof Rice</h3>
            <p>₦5,000</p>
          </div>

        </div>

      </section>



      <footer>

        <h3>
          The Olive Garden
        </h3>

        <p>
          Opening Hours: Mon - Sun 10AM - 11PM
        </p>

      </footer>

      <SupportButton />

    </div>
  );
}


export default App;
