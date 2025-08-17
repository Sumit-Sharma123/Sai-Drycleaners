import React from "react";
import  './Footer.css';
import Services from '../Services/Services';



const Footer = () => {
   return (
    <footer id="footer" style={{backgroundColor:"#0b82faff", borderRadius:"20px"}}>
     <div className="footer">
       <div className="col1">
        <h1 >Sai ❤️ <br></br> Drycleaning </h1><br></br>
        <p>"Our dry cleaning 👕 website offers convenient, 
          expert garment care services online, including pickup, 
          cleaning, and delivery—ensuring clothes stay fresh, spotless, and professionally maintained.”</p>
           
        </div>
     <div className="col2">
          <h1 style={{marginTop:"16px"}}>Quick Links</h1><br></br>
                    <a  href=" #whatsapp">Home</a>
                    <br />
                    <a  href="#about">About Us</a>
                    <br />
                    <a href="#terms" style={{cursor:"pointer"}}> Terms & Conditions</a>
                    <br />
                    <a  href="#prices">Pricing</a>
                    <br />
                    
                    <a  href="#services" style={{cursor:"pointer"}}>Our Services</a>
                    <br />
                    
                    <br />
      </div>
     <div className="col3">
          <h1 className="col3c">Contact Info : </h1><br></br>
          <p>📞 [+91 <a href="tel:+919354202144" style={{cursor:"pointer" , textDecoration : "none", color:"black"}}>9354202144</a>]</p>
          <p>🏢 [ Address : <a style={{color:"black"}}>Shop no. 044/FF AIPL Joy Street sec 66 Gurugram.</a>]</p><br></br>
          <p>🌐 Website Enquiry : </p>
          <p> [+91 <a href="tel:+919817972462" style={{cursor:"pointer" , textDecoration : "none", color:"black"}}>9817972462</a>]</p>
      </div>
     </div>
     <div className="footer-bottom">
    <p>© 2025 Sai ❤️ Drycleaning. All Rights Reserved.</p>
  </div>
    </footer>
    
  );
};
export default Footer;