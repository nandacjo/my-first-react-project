import React from "react";
import ReactLogo from "../images/react.png"

export default function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} alt="react-logo" className="nav--icon" />
      <h3 className="nav--logo_text">React Fact</h3>
      <h4 className="nav--title">React-courts project1</h4>
    </nav>
  )
}