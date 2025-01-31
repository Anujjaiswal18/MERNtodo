import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({ newUser });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addtask = async (req, res) => {
  try {
    const { text } = req.body;
    const activeUser = await req.user;
    await activeUser.todos.push(text);
    await activeUser.save();
    res.status(200).json({ activeUser });
  } catch (error) {
    console.log("Error in add task controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const edittask = async (req, res) => {
  try {
    console.log(req.body);
    const { ind, text } = req.body;
    const activeUser = await req.user;
    activeUser.todos[ind] = text;
    await activeUser.save();
    console.log(activeUser);
    res.status(200).json({ activeUser });
  } catch (error) {
    console.log("Error in edit task controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export const deletetask = async (req, res) => {
  const { ind } = req.body;
  try {
    const activeUser = await req.user;

    activeUser.todos.splice(ind, 1);

    // Save the updated document
    await activeUser.save();
    
    res.status(200).json({ activeUser });
  } catch (error) {
    console.log("Error in deleteTask controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const data = (req, res) => {
  res.status(200).json(req.user);
};
