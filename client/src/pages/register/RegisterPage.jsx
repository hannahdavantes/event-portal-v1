import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup.jsx";

import customFetch from "../../utils/customFetch.js";
import { redirect } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Wrapper method="post">
      <h1 className="title">Register Form</h1>
      <FormInputGroup type="text" name="firstName" labelText="first name" />
      <FormInputGroup type="text" name="lastName" labelText="last name" />
      <FormInputGroup type="email" name="email" />
      <FormInputGroup type="password" name="password" />
      <FormInputGroup
        type="password"
        name="confirmPassword"
        labelText="confirm password"
      />
      <Button></Button>
    </Wrapper>
  );
};
export default RegisterPage;
