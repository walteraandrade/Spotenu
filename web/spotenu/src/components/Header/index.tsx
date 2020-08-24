import React, { useState } from "react";
import "./styles.css";
import UserIcon from "../../global/images/user.svg";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

const Header: React.FC = () => {
  const [menu, toggleMenu] = useState(false);

  const handleMenu = () => {
    toggleMenu(!menu);
  };

  return (
    <div className="header">
      <p>
        <Link to="/">
          Spoten<span>u</span>
        </Link>
      </p>
      <img src={UserIcon} onClick={handleMenu} alt="user menu" />
      {menu ? <UserMenu /> : <></>}
    </div>
  );
};

export default Header;
