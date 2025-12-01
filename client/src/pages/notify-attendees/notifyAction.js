import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
  try {
    await customFetch.post(`/events/${params.id}/notify`);
    toast.success("Notifications sent to all attendees!");
    return redirect("/events");
  } catch (error) {
    toast.error(
      error?.response?.data?.msg || "There are no attendees to this event"
    );
    return null;
  }
};
