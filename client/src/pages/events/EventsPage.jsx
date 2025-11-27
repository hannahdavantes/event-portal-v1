import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: var(--black);

  a {
    color: var(--black);
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1rem;
    margin: 0 1rem;
    padding-left: 1rem;
  }

  a.active {
    font-weight: bold;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 0.2rem;
  }
`;

const EventsPage = () => {
  return (
    <TempWrapper>
      <nav>
        <Link to="/events/add">Add Event</Link>
      </nav>
      <Outlet />
    </TempWrapper>
  );
};
export default EventsPage;
