import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../../assets/wrappers/ErrorPage";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h1>Page not found!</h1>
      <p>The page you are looking for doesn't exist</p>
      <Link to="/">Back to Home</Link>
    </Wrapper>
  );
};
export default ErrorPage;
