import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export function Logout() {
  const history = useHistory();
  return (
    <div>
        <Link
          to="/"
          className="text-blue-500 py-3 border-b block"
          id="logout"
        >
          Logout
          </Link>
    </div>
  );
}

export default Logout;