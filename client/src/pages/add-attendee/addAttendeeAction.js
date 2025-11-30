import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`/events/${params.id}/join`, data);
    toast.success("You have registered to the event");
    return redirect("/events/all");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
