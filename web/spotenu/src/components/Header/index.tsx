import React from "react";
import "./styles.css";
import UserIcon from "../../global/images/user.svg";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

const Header: React.FC = () => {
  return (
    <div className="header">
      <p>
        <Link to="/">
          Spoten<span>u</span>
        </Link>
      </p>
      <img src={UserIcon} alt="user menu" />
    </div>
  );
};

export default Header;
