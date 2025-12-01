import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/events", data);
    toast.success("Event added succesfully");
    return redirect("/events");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return { error, data };
  }
};
