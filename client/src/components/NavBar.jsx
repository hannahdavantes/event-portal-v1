import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/NavBar";

const NavBar = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Wrapper>
  );
};
export default NavBar;
