import ContactMessage from "../models/ContactMessage.js";
import { isDBConnected } from "../config/db.js";
import { created, error, handleDbError } from "../utils/response.js";

export const submitContact = async (req, res) => {
  if (!isDBConnected()) {
    return error(res, {
      message: "Database is unavailable. Please try again later.",
      status: 503,
    });
  }

  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return error(res, {
        message: "All required fields must be filled.",
        errors: [
          { field: "fullName", message: "Required" },
          { field: "email", message: "Required" },
          { field: "subject", message: "Required" },
          { field: "message", message: "Required" },
        ],
        status: 400,
      });
    }

    const contactMessage = await ContactMessage.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    return created(res, {
      message: "Contact message submitted successfully",
      data: {
        contact: {
          id: contactMessage._id,
          fullName: contactMessage.fullName,
          email: contactMessage.email,
          subject: contactMessage.subject,
        },
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Contact submission failed.");
  }
};
