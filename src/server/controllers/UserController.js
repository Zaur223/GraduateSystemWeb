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

    studentNo: {
      type: String,
      unique: true,
      sparse: true,
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
    about: {
      type: String,
      default: ''
    },
    educations: {
      type: [
        {
          school: String,
          degree: String,
          startYear: String,
          endYear: String,
        },
      ],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
    },

    jobStatus: {
      type: String,
      enum: ['job_seeker', 'not_looking'],
      default: 'not_looking'
    }
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
      studentNo: req.body.studentNo,
      role: req.body.role,
      faculty: req.body.faculty,
      department: req.body.department,
      gpa: req.body.gpa,
      graduationDate: req.body.graduationDate,
      educations: req.body.educations || [],
      skills: req.body.skills || [],
      about: req.body.about || '',
    });
    const user = await doc.save();
    const token = 'dummy-token-' + user._id;
    res.json({ ...user._doc, token });
  } catch (err) {
    res.status(500).json({ message: 'Kayıt yapılamadı' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Only allow the user to update their own profile
    if (req.userId && String(req.userId) !== String(req.params.id)) {
      return res.status(403).json({ message: 'Bu profili güncelleme izniniz yok' });
    }

    // Only allow updating educations, skills and about through this endpoint
    if (req.body.educations !== undefined) user.educations = req.body.educations;
    if (req.body.skills !== undefined) user.skills = req.body.skills;
    if (req.body.about !== undefined) user.about = req.body.about;
    if (req.body.jobStatus !== undefined) user.jobStatus = req.body.jobStatus;

    // Ensure arrays exist for student role
    if (user.role === 'student') {
      user.educations = user.educations || [];
      user.skills = user.skills || [];
      user.about = user.about || '';
      user.jobStatus = user.jobStatus || 'not_looking';
    }

    await user.save();
    const safeUser = user.toObject();
    delete safeUser.password;
    res.json(safeUser);
  } catch (err) {
    res.status(500).json({ message: 'Güncelleme başarısız' });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    const safeUser = user.toObject();
    delete safeUser.password;
    if (safeUser.role === 'student') {
      safeUser.educations = safeUser.educations || [];
      safeUser.skills = safeUser.skills || [];
      safeUser.about = safeUser.about || '';
    }
    res.json(safeUser);
  } catch (err) {
    res.status(500).json({ message: 'Hata oluştu' });
  }
};