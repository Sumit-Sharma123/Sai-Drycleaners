import React from "react";
import './WhatsApp.css'; // Assuming you have a WhatsApp CSS file
import background from '../WhatsApp/background.png';


const WhatsApp = () => {
  return (
     <div id="whatsapp" className="homepage-container">
      <div className="image-section">
        <img src={background} alt="Dry Cleaning" className="background-image" />
        <div className="text-overlay">
          <h1>Professional Dry Cleaning</h1><br></br><br></br><br></br>
          <p>Expert care for your clothes. Quick. Clean. Reliable.</p><br></br>
          <p>
            We handle your garments with utmost precision, using modern equipment
            and eco-friendly <br></br>cleaning agents. Trusted by hundreds of happy customers!
          </p>
          <p >
    We specialize in bringing your clothes back to <br></br> life using advanced cleaning technology and
    environmentally safe products. Every fabric is handled with attention <br></br>to detail and utmost hygiene.
  </p><br></br><br></br><br></br>
  <ul className="features-list">
    <li>✨  Express Cleaning Options</li>
    <li>🚚 Doorstep Pickup and Delivery Included</li>
    <li>🧼 Expert Stain Treatment & Fabric Care</li>
    <li>🌱 Non-toxic, Eco-safe Cleaning Agents</li>
    <li>📱 Easy Online Booking and Tracking</li>
    <li>🕒 On-Time, Every Time – 7 Days a Week</li>
    <li>🚚 Free Pickup & Delivery at Your Doorstep!</li>
  </ul>
        
        </div>
      </div>
       <div className="about-section">
        <h2>About Us</h2>
        <p>
          We provide premium dry cleaning and laundry services using eco-friendly techniques
          and expert professionals. We ensure your clothes come back looking fresh and clean.
        </p>
      </div>
       <div className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>✔ Dry Cleaning</li>
          <li>✔ Laundry Services</li>
          <li>✔ Shoe Cleaning</li>
          <li>✔ Ironing</li>
          <li>✔ Home Pick-up & Delivery</li>
        </ul>
      </div>
      
      </div>
      
  );
};

export default WhatsApp;
