import { useLoaderData } from "react-router-dom";

import Wrapper from "../../assets/wrappers/EventsPage.js";
import Event from "../../components/Event";

const MyEvents = () => {
  const data = useLoaderData();

  return (
    <Wrapper>
      {data.map((e) => (
        <Event event={e} key={e._id} showActions />
      ))}
    </Wrapper>
  );
};
export default MyEvents;
