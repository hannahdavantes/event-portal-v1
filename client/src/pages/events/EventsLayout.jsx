import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";

import Wrapper from "../../assets/wrappers/EventsLayout";
import NavBar from "../../components/NavBar";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { createContext } from "react";

const EventsLayout = () => {
  const EventsContext = createContext();

  const navigate = useNavigate();

  const user = useLoaderData();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("User succesfully logged out");
  };

  return (
    <EventsContext.Provider value={{ user }}>
      <Wrapper>
        <NavBar>
          <h1>
            Hello, {user.firstName} {user.lastName}
          </h1>
          <NavLink to="/events" end>
            My Events
          </NavLink>
          <NavLink to="/events/add">Add Events</NavLink>
          <button onClick={logoutUser} className="nav-link">
            Logout
          </button>
        </NavBar>

        <Outlet context={{ user }} />
      </Wrapper>
    </EventsContext.Provider>
  );
};
export default EventsLayout;
