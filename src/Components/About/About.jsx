import React from "react";
import './About.css';
import aboutImage from '../../assets/sai.png'; // Assuming you have an image for the about section
import img1 from '../../assets/s1.png'; 
import img2 from '../../assets/s2.png';
import img3 from '../../assets/s3.png';
const About = () => {
    return (
        <div id="about" className="about">
           <div className="about-title">
               <h2>About Us</h2>
           </div>
           <div className="about-section" style={{backgroundColor:"white"}}>
                <div className="about-left">
                    <img src={aboutImage} alt="" className="sai" />
                </div>
                <div className="about-right">
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 2019, a dry cleaning startup named 
                      SAI DRYCLEANERS was launched by <a style={{color: "blue"}}> Neeraj Sharma</a> 
                          &nbsp; with a vision to modernize and simplify garment care.
                          Starting in a small rented unit with limited resources and a basic dry cleaning setup,
                           they focused on providing high-quality services to a handful of residential customers in 
                           their local area. Their commitment to stain removal, fabric safety, and professional customer
                            interaction quickly gained them word-of-mouth popularity. As their client base grew, 
                            they introduced doorstep pickup and delivery options to make the experience more convenient.
                           </p>
                </div>
           </div>
           <div className="img">
            <div >
                <img className="img1" src={img1} alt="" height={"250px"} width={"250px"} style={{borderTopLeftRadius: "25px"}}/> 
            </div>
            <div>
                <img className="img1" src={img2} alt="" height={"250px"} width={"250px"} style={{borderTopLeftRadius: "25px"}}/> 
            </div>
            <div>
                  <img className="img1" src={img3} alt="" height={"250px"} width={"250px"} style={{borderTopLeftRadius: "50px"}}/> 
            </div>
            <div>
                 <img className="img1" src={aboutImage} alt="" height={"250px"} width={"250px"} style={{borderTopLeftRadius: "25px"}}/> 
            </div>
           </div>
        </div>

    )
}
export default About;