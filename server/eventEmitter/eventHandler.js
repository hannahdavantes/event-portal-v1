import eventEmitter from "./eventEmitter.js";
import { sendEmail } from "../utils/sendEmail.js";
import { formatDateForInput, formatTimeTo12Hour } from "../utils/dateUtils.js";

eventEmitter.on("notifyAttendees", async ({ event }) => {
  console.log("Sending notifications to attendees...");

  for (const attendee of event.attendees) {
    await sendEmail({
      to: attendee.email,
      subject: `Update about ${event.title}`,
      html: `
        <h2>Hello ${attendee.firstName} ${attendee.lastName},</h2>
        <p>There is an important update regarding your event:</p>

        <h3>${event.title}</h3>
        <p>${event.description}</p>

        <p><strong>Date:</strong> 
          ${formatDateForInput(event.startDate)} 
          to 
          ${formatDateForInput(event.endDate)}
        </p>

        <p><strong>Time:</strong> 
          ${formatTimeTo12Hour(event.startTime)} 
          to 
          ${formatTimeTo12Hour(event.endTime)}
        </p>

        <p><strong>Location:</strong> ${event.location}</p>

        <br/>
        <p>Thank you!</p> 
      `,
    });
  }

  console.log("All attendee notifications sent!");
});
