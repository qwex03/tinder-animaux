// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import user from "./img/user.png";
import star from "./img/star.png";
import search from "./img/search.png";
import message from "./img/message.png"
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <nav>
        <div>
          <img src={logo} />
          <Link to="">Pefty</Link>
        </div>
        <div>
          <img src={search} />
          <Link to="/login">Recherche</Link>
        </div>
        <div>
          <img src={message} />
          <Link to="/login">Discussion</Link>
        </div>
        <div>
          <img src={star} />
          <Link to="/register">Premium</Link>
        </div>
        <div>
          <img src={user} />
          <Link to="/chat">Profil</Link>
        </div> 
    </nav>
  );
};

export default Navbar;
