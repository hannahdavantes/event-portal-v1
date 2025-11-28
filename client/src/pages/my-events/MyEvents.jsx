import { useLoaderData, useOutlet, useOutletContext } from "react-router-dom";

const MyEvents = () => {
  const data = useLoaderData();
  const { user } = useOutletContext();
  return (
    <div>
      {data.map((e) => (
        <h3 key={e._id}>{e.title}</h3>
      ))}
    </div>
  );
};
export default MyEvents;
