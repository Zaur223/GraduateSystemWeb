import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["student", "teacher"],
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    faculty: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },

    department: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },

    gpa: {
      type: Number,
      min: 0,
      max: 4,
      required: function () {
        return this.role === "student";
      },
    },

    graduationDate: {
      type: Date,
      required: function () {
        return this.role === "student";
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    if (user.password !== req.body.password) {
      return res.status(400).json({ message: 'Şifre yanlış' });
    }
    const token = 'dummy-token-' + user._id;
    res.json({ ...user._doc, token });
  } catch (err) {
    res.status(500).json({ message: 'Giriş yapılamadı' });
  }
};

export const register = async (req, res) => {
  try {
    const doc = new User({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      faculty: req.body.faculty,
      department: req.body.department,
      gpa: req.body.gpa,
      graduationDate: req.body.graduationDate,
    });
    const user = await doc.save();
    const token = 'dummy-token-' + user._id;
    res.json({ ...user._doc, token });
  } catch (err) {
    res.status(500).json({ message: 'Kayıt yapılamadı' });
  }
};