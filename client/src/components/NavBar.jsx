import { NavLink } from "react-router-dom";

import Wrapper from "../assets/wrappers/NavBar";

const NavBar = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Wrapper>
  );
};
export default NavBar;
