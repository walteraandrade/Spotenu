import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import MenuIcon from "../../global/images/menu.svg";

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <div className="header">
      <Link to="home">
        <p>Spotenu</p>
      </Link>

      <img src={MenuIcon} alt="menu" />
    </div>
  );
};

export default Header;
