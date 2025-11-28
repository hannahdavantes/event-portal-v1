import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup.jsx";

const LoginPage = () => {
  return (
    <Wrapper method="post">
      <h1 className="title">Login as Admin</h1>
      <FormInputGroup type="email" name="email" />
      <FormInputGroup type="password" name="password" />
      <Button />
    </Wrapper>
  );
};
export default LoginPage;
