import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    contactName: {
      type: String,
      required: [true, "Contact name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    trafficSources: {
      type: String,
      trim: true,
    },
    monthlyVolume: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

publisherSchema.methods.toJSON = function () {
  const publisher = this.toObject();
  delete publisher.password;
  return publisher;
};

export default mongoose.model("Publisher", publisherSchema);
