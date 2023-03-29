import mongoose from 'mongoose';
import validator from 'validator';
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Email is invalid"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  clearance: {
    type: String,
    enum: ["level 1", "level 2", "admin"],
    default: "level 1",
  },
});

export const UserModel = mongoose.models.Users || mongoose.model('Users', userSchema, 'Users');