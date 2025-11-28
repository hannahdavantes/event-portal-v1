import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup.jsx";

const RegisterPage = () => {
  return (
    <Wrapper method="post">
      <h1 className="title">Register as Event Organizer</h1>
      <FormInputGroup type="text" name="firstName" labelText="first name" />
      <FormInputGroup type="text" name="lastName" labelText="last name" />
      <FormInputGroup type="email" name="email" />
      <FormInputGroup type="password" name="password" />
      <FormInputGroup
        type="password"
        name="confirmPassword"
        labelText="confirm password"
      />
      <Button />
      <p>
        Already registered? Click <Link to="/login">here</Link> to login.
      </p>
    </Wrapper>
  );
};
export default RegisterPage;
