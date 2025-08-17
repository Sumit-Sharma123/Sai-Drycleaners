import React from "react";
import './Home.css';
import bubble from '../../assets/air.png'; // Assuming you have a bubble image

const Home = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cee51b06-b664-4cf6-885f-daf2fc2ffbde");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
       alert("Thank you!");
    }
  };
  return (
    <div id="home" onSubmit={onSubmit} className="home">
        <div className="home-title">
            <h1><img src={bubble} alt="Bubble" height={"35px"} width={"35px"} />Welcome to Our Dry Cleaning Service</h1>
      
        </div>
        <div className="home-section">
             <form  className="home-right">
               <label htmlFor="">Full Name : </label>
               <input type="text" placeholder="Mr/Mrs" name="name" /><br />
               <label htmlFor="">Address</label>
               <input type="text" placeholder="Enter Your Address" name="address"/><br/>
               <label htmlFor="">Phone No.</label>
               <input type="text" placeholder="Your Phone No." name="phone"/><br/>
               <label htmlFor="">Write Your Message</label><br></br>
               <textarea name="message" rows="3" placeholder="Enter Your Message"></textarea><br/>
             <button type="submit" className="home-submit">Submit now</button>
        </form>
            <div className="home-left">
                 <h3>Experience the Best in <br/> Dry Cleaning</h3>
                 <p>We offer top-notch dry cleaning services with a commitment to quality and customer satisfaction. </p>
                <p>  Pickup and delivery services, affordable pricing, and a customer-first approach that makes us one of the most trusted names in dry cleaning.
                 </p>
            </div>
          
        </div>
    </div>
  );
};

export default Home;