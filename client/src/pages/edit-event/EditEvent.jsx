import { useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Form.js";
import Button from "../../components/Button.jsx";
import FormInputGroup from "../../components/FormInputGroup";
import {
  formatDateForInput,
  formatTimeForInput,
} from "../../utils/dateUtils.js";

const EditEvent = () => {
  const event = useLoaderData();
  const {
    title,
    description,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
  } = event;

  return (
    <Wrapper method="POST">
      <h1 className="title">Add Event</h1>
      <FormInputGroup
        type="text"
        name="title"
        labelText="title"
        defaultValue={title}
      />
      <FormInputGroup
        type="text"
        name="description"
        labelText="description"
        defaultValue={description}
      />
      <FormInputGroup
        type="text"
        name="location"
        labelText="location"
        defaultValue={location}
      />
      <FormInputGroup
        type="date"
        name="startDate"
        labelText="Start Date"
        defaultValue={formatDateForInput(startDate)}
      />
      <FormInputGroup
        type="date"
        name="endDate"
        labelText="End Date"
        defaultValue={formatDateForInput(endDate)}
      />
      <FormInputGroup
        type="time"
        name="startTime"
        labelText="Start Time"
        defaultValue={formatTimeForInput(startTime)}
      />
      <FormInputGroup
        type="time"
        name="endTime"
        labelText="End Time"
        defaultValue={formatTimeForInput(endTime)}
      />
      <Button isInForm />
    </Wrapper>
  );
};
export default EditEvent;
