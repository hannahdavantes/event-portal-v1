import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/events/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/events");
  }
};
