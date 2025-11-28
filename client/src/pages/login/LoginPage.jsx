import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup.jsx";

const LoginPage = () => {
  return (
    <Wrapper method="post">
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
