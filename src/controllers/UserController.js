import users from "../models/userModels";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, { genSalt, hash } from "bcrypt";

// creation of users

export const createUser = async (req, res) => {
  let { firstname, lastname, username, email, password, userProfile } =
    req.body;
  try {
    const userEmail = await users.findOne({
      email: req.body.email,
    });
    if (userEmail) {
      return res.status(500).json({
        message: "Email Already Exist",
      });
    }

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const createAccount = await users.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPass,
      userProfile:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
    const token = await Jwt.sign(
      { id: createAccount.id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRE_DATE,
      }
    );
    return res.status(200).json({
      statusbar: "Success",
      message: "User Account Created Well",
      data: createAccount,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create User Account",
      error: error.message,
    });
  }
};

// userLogin

export const login = async (req, res) => {
  try {
    const userLogin = await users.findOne({
      email: req.body.email,
    });
    if (!userLogin) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Password inorect",
      });
    }
    const token = await Jwt.sign(
      { id: userLogin._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRE_DATE }
    );
    res.status(200).json({
      message: "logedin success",
      users: userLogin,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail to retrive data",
      error: error.message,
    });
  }
};

// getAll user

export const getAllUsers = async (req, res) => {
  try {
    const getAll = await users.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All users Data Fetched Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "All users Data Not Fetched Well",
      error: error.message,
    });
  }
};

// getSingle user

export const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await users.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "User id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Job Done",
      message: "Single User Geted Well",
      data: getId,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Faileed",
      message: "Failed to get Sungle user",
      error: error.message,
    });
  }
};

// Update User

export const updateUsers = async (req, res) => {
  let { firstname, lastname, username, email, password, userProfile } =
    req.body;
  try {
    const { id } = req.params;
    const getId = await users.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "User id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const updatedData = await users.findByIdAndUpdate(id, {
      firstname,
      lastname,
      username,
      email,
      password: hashedPass,
      userProfile:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "User account Updated Well",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update User",
      error: error.message,
    });
  }
};

//delete user

export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const getid = await users.findById(id);
    if (!getid) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "User Id Not Found",
      });
    }
    const updatedData = await users.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "User Account Deleted Successfully",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete User",
      error: error.message,
    });
  }
};
