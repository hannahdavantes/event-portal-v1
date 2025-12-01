import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup.jsx";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const LoginPage = () => {
  return (
    <Wrapper method="post">
      <Link to="/" className="back-button">
        <MdOutlineKeyboardBackspace size={30} /> BACK TO HOME
      </Link>
      <h1 className="title">Login as Event Organizer</h1>
      <FormInputGroup type="email" name="email" />
      <FormInputGroup type="password" name="password" />
      <Button />
      <p>
        Not registered as an event organizer? Click{" "}
        <Link to="/register">here</Link> to register.
      </p>
    </Wrapper>
  );
};
export default LoginPage;
