import React from "react";
import './About.css'

const About = () => {
  return (
    <div>
      <div className="AboutBox">
        <div>
          <h1 style={{ color: "#2827CC" }} >Who We Are</h1>
          <p>
            HATIL is considered to be the ‘game-changer’ in Bangladesh’s
            furniture industry. Carefully-chosen raw material,
            environment-friendly business practice and customer-centric approach
            is what made HATIL a beloved brand at home and abroad.HATIL is
            considered to be the ‘game-changer’ in Bangladesh’s furniture
            industry. Carefully-chosen raw material, environment-friendly
            business practice and customer-centric approach is what made HATIL a
            beloved brand at home and abroad.
          </p>
        </div>
        <div>
          <img
            src="https://hatil.com/sites/default/files/20-54-14-12-2_0.jpg"
            alt=""
            className="My-img-fluid"
          />
        </div>
        <div>
          <h1 style={{ color: "#2827CC" }}>Principle</h1>
          <p>
            To do Justice and behave Ethically with our Customers, Partners,
            Insiders and the Communities Vision To help elevate the lifestyle
            and living of people in general with our Innovations, Creations and
            Business Practices
          </p>
          <h1 style={{ color: "#2827CC" }}>Vision</h1>
          <p>
            To help elevate the lifestyle and living of people in general with
            our Innovations, Creations and Business Practices
          </p>
          <h1 style={{ color: "#2827CC" }}>Mission</h1>
          <p>
            To stay contemporary and contextual being innovative and
            cutting-edge
          </p>
        </div>
        <div>
          <img
            src="https://hatil.com/sites/default/files/About%20us%2002%2B%2B_1.png"
            alt=""
            className="My-img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
