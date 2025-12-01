import { Link, useNavigate, useRouteError } from "react-router-dom";
import Wrapper from "../../assets/wrappers/ErrorPage";
import errorImage from "../../../public/error.svg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  const handleBackToPreviousPage = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <Wrapper>
      <img src={errorImage} alt="error image" className="error-img" />
      <h1>Page not found!</h1>
      <p>The page you are looking for doesn't exist</p>
      <Link to="#" onClick={handleBackToPreviousPage} className="error-link">
        Back to Previous Page
      </Link>
    </Wrapper>
  );
};
export default ErrorPage;
