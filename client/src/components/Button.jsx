import { useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Button";
const Button = ({ isInForm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper
      type="submit"
      className={isInForm ? "form-btn" : undefined}
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting..." : "submit"}
    </Wrapper>
  );
};
export default Button;
