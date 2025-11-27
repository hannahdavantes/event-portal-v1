import { useLoaderData } from "react-router-dom";

const AllEvents = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.map((e) => (
        <h3 key={e._id}>{e.title}</h3>
      ))}
    </div>
  );
};
export default AllEvents;
