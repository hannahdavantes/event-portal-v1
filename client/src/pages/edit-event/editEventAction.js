import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/events/${params.id}`, data);
    toast.success("Event edited successfully");
    return redirect("/events");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};
