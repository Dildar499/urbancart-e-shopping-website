import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const CreateAccount = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(401)
        .json({ message: "All fields are required to fill" });
    }
    if (password.length < 8) {
      return res
        .status(401)
        .json({ message: "Password must be greater than 8 Characters" });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({ message: "Password are not match" });
    }
    const exist = await User.findOne({ email: email.toLowerCase() });
    if (exist) {
      return res
        .status(401)
        .json({ message: "This Email is already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({
      message: "Account Created",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        message: "Email and Password are required",
      });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
     if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Incorrect Password Entered",
      });
    }
    res.status(200).json({
      message: "Login Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
