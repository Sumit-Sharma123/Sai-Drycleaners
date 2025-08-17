import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Terms from "./Components/Terms&Conditions/Terms&Conditions";
import Prices from "./Components/Prices/Prices";
import About from "./Components/About/About";


const App = () => {
  return (
    <div>
      
      <Navbar/>
      <div>
       <WhatsApp/><br></br><br></br><br></br>
      <Services/><br></br><br></br><br></br>
      <About/><br></br><br></br><br></br>
      <Home/><br></br><br></br><br></br>
      <Terms/><br></br><br></br><br></br>
      
      <Prices/><br></br>
      <Footer/>
     </div>  

    </div>
    
  );
}
export default App;