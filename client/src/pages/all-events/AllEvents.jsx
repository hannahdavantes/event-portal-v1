import { useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/EventsPage.js";
import Event from "../../components/Event";

const AllEvents = () => {
  const data = useLoaderData();

  return (
    <Wrapper>
      <h1 className="title">Upcoming events</h1>
      <h2 className="subtitle">Find the perfect event to join today.</h2>

      {data.length === 0 ? (
        <>
          <h1 className="title">There are no events posted.</h1>
          <h1>
            Want to add events? Click{" "}
            <a href="/register" className="title-link">
              here
            </a>{" "}
            to register as an event organizer.
          </h1>
        </>
      ) : (
        <>
          <h1>
            Want to add events? Click{" "}
            <a href="/register" className="title-link">
              here
            </a>{" "}
            to register as an event organizer.
          </h1>

          {data.map((e) => (
            <Event event={e} key={e._id} showJoinAction />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default AllEvents;
