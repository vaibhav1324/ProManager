import React from "react";
import { Link, NavLink } from "react-router-dom";

export const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/">Log in</NavLink>
      </li>
    </ul>
  );
};
