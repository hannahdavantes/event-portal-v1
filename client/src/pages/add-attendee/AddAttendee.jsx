import Wrapper from "../../assets/wrappers/Form.js";

import FormInputGroup from "../../components/FormInputGroup.jsx";
import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const AddAttendee = () => {
  return (
    <Wrapper method="post">
      <Link to="/events/all" className="back-button">
        <MdOutlineKeyboardBackspace size={30} /> Back to events
      </Link>
      <h1 className="title">Register to event</h1>
      <FormInputGroup type="text" name="firstName" labelText="first name" />
      <FormInputGroup type="text" name="lastName" labelText="last name" />
      <FormInputGroup type="email" name="email" />
      <Button />
    </Wrapper>
  );
};
export default AddAttendee;
