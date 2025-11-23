import Wrapper from "../assets/wrappers/Form";
import Button from "../components/Button";

import FormInputGroup from "../components/FormInputGroup";

const RegisterPage = () => {
  return (
    <Wrapper>
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
