export const formatDateForInput = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const formatTimeForInput = (timeString) => {
  if (!timeString) return "";

  // Detect if it's ISO string (contains "T")
  if (timeString.includes("T")) {
    const date = new Date(timeString);
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  // Assume it's 12-hour format "12:00 PM"
  const [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}`;
};
