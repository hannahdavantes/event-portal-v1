import nodemailer from "nodemailer";
import { BadRequestError } from "../errors/customErrors.js";

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Event Portal App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent!");
  } catch (error) {
    console.error("Email error:", error);
    throw new BadRequestError("Something went wrong with sending emails");
  }
};
