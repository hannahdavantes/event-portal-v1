import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch.js";
import { redirect } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await customFetch.get("/events/all");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/login");
  }
};
