import React from "react";
import { Link } from "react-router-dom";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

import Login from "./Login"

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">Regive.</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/donate"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Donate
          </Link>
        </li>
        <li>
          <Login/>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
