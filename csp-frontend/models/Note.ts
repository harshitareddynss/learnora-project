import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    pdfLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note =
  mongoose.models.Note ||
  mongoose.model("Note", NoteSchema);

export default Note;
