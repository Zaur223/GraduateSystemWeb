import mongoose from "mongoose";

const StudentTermSchema = new mongoose.Schema(
  {
    studentNo: {
      type: String,
      required: true,
      match: /^[0-9]{9}$/,
      index: true,
    },

    year: {
      type: Number,
      required: true,
    },

    term: {
      type: String,
      enum: ["Guz", "Bahar"],
      required: true,
    },

    gpa: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
  },
  { timestamps: true }
);

// 🔐 Aynı öğrenci + yıl + dönem tekrar edemesin
StudentTermSchema.index(
  { studentNo: 1, year: 1, term: 1 },
  { unique: true }
);

export default mongoose.model("StudentTerm", StudentTermSchema);
