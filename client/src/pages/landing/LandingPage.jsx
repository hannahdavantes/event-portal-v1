import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/LandingPage.js";
import groupSelfie from "../../../public/group.svg";
const LandingPage = () => {
  return (
    <Wrapper>
      <section className="hero">
        <h1 className="title">Event Portal</h1>
        <img
          src={groupSelfie}
          alt="Group selfie illustration"
          className="hero-svg"
        />
        <p className="subtitle">
          Discover events, stay updated, and manage your own.
        </p>

        <div className="actions">
          <Link to="/events/all" className="btn-primary">
            View Events
          </Link>

          <div className="admin-section">
            <p>Event Organizer?</p>
            <div className="admin-links">
              <Link to="/login" className="admin-link">
                Login
              </Link>
              <span className="divider">|</span>
              <Link to="/register" className="admin-link">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default LandingPage;
