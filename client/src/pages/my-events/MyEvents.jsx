import { useLoaderData, useOutletContext } from "react-router-dom";

import Wrapper from "../../assets/wrappers/EventsPage";
import Event from "../../components/Event";

const MyEvents = () => {
  const data = useLoaderData();
  const { user } = useOutletContext();

  return (
    <Wrapper>
      {data.map((e) => (
        <Event event={e} key={e._id} showActions />
      ))}
    </Wrapper>
  );
};
export default MyEvents;
