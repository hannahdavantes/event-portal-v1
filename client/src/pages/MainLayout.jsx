import { Outlet, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaCalendarAlt } from "react-icons/fa";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default MainLayout;
