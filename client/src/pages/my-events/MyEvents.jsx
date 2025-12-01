import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/EventsPage";
import Event from "../../components/Event";

const MyEvents = () => {
  const data = useLoaderData();

  const isEmpty = !data || data.length === 0;

  return (
    <Wrapper>
      {isEmpty && (
        <div className="empty-container">
          <p className="empty">You haven't added any events yet.</p>
          <Link to="/events/add" className="add-btn">
            Add Event
          </Link>
        </div>
      )}

      {!isEmpty && (
        <>
          <div className="events-container">
            <h1 className="subtitle">Here are the events you created</h1>
            {data.map((e) => (
              <Event event={e} key={e._id} showActions />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default MyEvents;
