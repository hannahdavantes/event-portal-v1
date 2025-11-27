import Wrapper from "../../assets/wrappers/Form.js";

import FormInputGroup from "../../components/FormInputGroup.jsx";
import Button from "../../components/Button.jsx";

const AddEvent = () => {
  return (
    <Wrapper method="POST">
      <h1 className="title">Add Event</h1>
      <FormInputGroup type="text" name="title" labelText="title" />
      <FormInputGroup type="text" name="description" labelText="description" />
      <FormInputGroup type="text" name="location" labelText="location" />
      <FormInputGroup type="date" name="startDate" labelText="Start Date" />
      <FormInputGroup type="date" name="endDate" labelText="End Date" />
      <FormInputGroup type="time" name="startTime" labelText="Start Time" />
      <FormInputGroup type="time" name="endTime" labelText="End Time" />
      <Button isInForm />
    </Wrapper>
  );
};
export default AddEvent;
