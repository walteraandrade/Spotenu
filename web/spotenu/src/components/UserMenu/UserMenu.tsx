import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const UserMenu: React.FC = () => {
  return (
    <div className="userMenuContainer">
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/evaluate">evalute bands</Link>
        </li>
        <li>
          <button>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
