import mongoose from "mongoose";

const nofiticationSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: [
        "follow",
        "like" /*"comment", "mention" if i want to apply this in future*/,
      ],
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const Notification = mongoose.model("Notification", nofiticationSchema);

export default Notification;
