//The NavTab component is just a NavLink component with
//some style and an activeStyle attribute that makes it turn
//green and bold when it is active. Its to attribute is passed
//down as a props and will determine where it will link to.
//Its label is also passed down as a props.
import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "10px"
  };
  return (
    <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;
