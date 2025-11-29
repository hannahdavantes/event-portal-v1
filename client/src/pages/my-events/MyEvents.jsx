import {
  Link,
  useLoaderData,
  useOutlet,
  useOutletContext,
} from "react-router-dom";

const MyEvents = () => {
  const data = useLoaderData();
  const { user } = useOutletContext();

  return (
    <div>
      {data.map((e) => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <Link to={`/events/edit/${e._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};
export default MyEvents;
