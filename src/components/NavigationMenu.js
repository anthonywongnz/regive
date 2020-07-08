import React from "react";
import { Link } from "react-router-dom";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

import Cookies from "js-cookie";

import Login from "./Login"

function NavigationMenu(props) {
  let menu = null;
  console.log(Cookies.get("user"))
  if (Cookies.get("user") == null){
    menu = (<div>
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
          <Login />
        </li>
      </ul>
    </div>)
  } else {
    menu = (<div>
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
          Logout
        </li>
      </ul>
    </div>)
  }

  return (
    menu
  );
}

export default NavigationMenu;
