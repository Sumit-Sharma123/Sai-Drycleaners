import React, { useRef, useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/logo2.png"; 
import phone from "../assets/phone-call.png";
import Call from "./Call/Call";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/mn.png";   // same as your menu
import menu_close from "../assets/mc.png"; // same as your close
import wavy from "../assets/img6.jpeg";    // kept since you had it

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Mobile menu open button */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu"
        className="menu"
        height="20px"
        width="20px"
      />

      {/* Menu List */}
      <ul ref={menuRef} className="nav-menu" id="navbar">
        {/* Close button */}
        <img
          src={menu_close}
          alt="close"
          onClick={closeMenu}
          className="close"
          height="20px"
          width="20px"
        />

        <li>
          <AnchorLink className="anchor-link" href="#whatsapp" offset={50}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={wavy} alt="" height="0px" width="0px" style={{display:"none"}} /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Us</p>
          </AnchorLink>
          {menu === "about" ? <img src={wavy} alt="" height="0px" width="0px" style={{display:"none"}} /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={wavy} alt="" height="0px" width="0px" style={{display:"none"}} /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#prices" offset={50}>
            <p onClick={() => setMenu("prices")}>Prices</p>
          </AnchorLink>
          {menu === "prices" ? <img src={wavy} alt="" height="0px" width="0px" style={{display:"none"}} /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#home" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={wavy} alt="" height="0px" width="0px" style={{display:"none"}} /> : null}
        </li>
      </ul>

      {/* Connect Section (Right side) */}
      <div className="nav-connect">
        <Call />
      </div>
    </div>
  );
};

export default Navbar;