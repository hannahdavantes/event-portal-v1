import { useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/EventsPage.js";
import Event from "../../components/Event";

const AllEvents = () => {
  const data = useLoaderData();

  return (
    <Wrapper>
      <h1>
        Want to add events? Click <a href="/register">here</a> to register as an
        event organizer
      </h1>
      {data.map((e) => (
        <Event event={e} key={e._id} showJoinAction />
      ))}
    </Wrapper>
  );
};

export default AllEvents;
