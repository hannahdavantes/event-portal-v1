import Wrapper from "../../assets/wrappers/Form.js";

import FormInputGroup from "../../components/FormInputGroup.jsx";
import Button from "../../components/Button.jsx";
import { useActionData } from "react-router-dom";

const AddEvent = () => {
  const actionData = useActionData();
  const data = actionData?.data || {}; // ← FIXED

  return (
    <Wrapper method="POST">
      <h1 className="title">Add Event</h1>
      <FormInputGroup
        type="text"
        name="title"
        labelText="title"
        defaultValue={data.title}
      />
      <FormInputGroup
        type="text"
        name="description"
        labelText="description"
        defaultValue={data.description}
      />
      <FormInputGroup
        type="text"
        name="location"
        labelText="location"
        defaultValue={data.location}
      />
      <FormInputGroup
        type="date"
        name="startDate"
        labelText="Start Date"
        defaultValue={data.startDate}
      />
      <FormInputGroup
        type="date"
        name="endDate"
        labelText="End Date"
        defaultValue={data.endDate}
      />
      <FormInputGroup
        type="time"
        name="startTime"
        labelText="Start Time"
        defaultValue={data.startTime}
      />
      <FormInputGroup
        type="time"
        name="endTime"
        labelText="End Time"
        defaultValue={data.endTime}
      />
      <Button isInForm />
    </Wrapper>
  );
};

export default AddEvent;
