import users from "../models/userModels";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, { genSalt, hash } from "bcrypt";

// creation of users

export const createUser = async (req, res) => {
  let { firstname, lastname, email, password, userProfile } = req.body;
  try {
    const result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const createAccount = await users.create({
      firstname,
      lastname,
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
