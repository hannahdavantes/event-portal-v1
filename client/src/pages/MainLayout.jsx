import { Outlet, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/events">Events</NavLink>
      </NavBar>
      <Outlet />
    </>
  );
};
export default MainLayout;
