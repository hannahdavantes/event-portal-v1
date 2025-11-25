import { useLoaderData } from "react-router-dom";

const DashboardPage = () => {
  const data = useLoaderData();
  return <h1>{data}</h1>;
};
export default DashboardPage;
