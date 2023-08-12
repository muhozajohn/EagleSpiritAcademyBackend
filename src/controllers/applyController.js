import apply from "../models/applyModels";
import { uploadToCloud } from "../helper/cloud";
import nodemailer from "nodemailer";
import sendMail from "../helper/sendMail";

export const createApplication = async (req, res) => {
  let {
    pname,
    pnumber,
    pmail,
    pnationality,
    pcity,
    pstate,
    stName,
    stMiddleName,
    stLname,
    stProfile,
    stGender,
    stBirth,
    stMail,
    stNationality,
    stCity,
    stState,
  } = req.body;
  try {
    const userEmail = await apply.findOne({
      pmail: req.body.pmail,
    });
    if (userEmail) {
      return res.status(500).json({
        message: "Email Already Exist",
      });
    }

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const application = await apply.create({
      pname,
      pnumber,
      pmail,
      pnationality,
      pcity,
      pstate,
      stName,
      stMiddleName,
      stLname,
      stProfile:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      stGender,
      stBirth,
      stMail,
      stNationality,
      stCity,
      stState,
    });

    // create

    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "muhozajohn250@gmail.com",
    //     pass: "nizejtefhzbgxtrp",
    //   },
    // });
    // let mailOptions = {
    //   from: "eaglespiritacademy2020@gmail.com",
    //   to: pmail,
    //   subject: "Application Status",
    //   // text: "Congratulations you have successfully registered",
    //   html: "<h1>Welcome to Eagle Sprit Academy </h1> <br/> Congratulations you have successfully registered <a href='https://eaglespirit.vercel.app/'> Back on it </a> ",
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + mailOptions.to, info.response);
    //   }
    // });

    const emailTemplate = {
      emailTo: pmail,
      subject: "Application Received - Confirmation Soon",
      message: `<h1> Dear ${pname}, </h1> <br/>   We're pleased to inform you that we've received your child's application. Thank you for choosing Eagle spirit academy. Our team is reviewing applications, and we'll be in touch shortly with confirmation. Your patience is appreciated. <br/> <br/> <br/> 
      <p> Best regards,</p><br/>
      <p>David Andrew Wambuzi</p><br/>
       <p>Eagle Spirit Academy Principle  </p><br/> `,
    };

    sendMail(emailTemplate);

    return res.status(201).json({
      statusbar: "success",
      message: "Application created successfully",
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Application Failed to be Created",
      error: error.message,
    });
  }
};

//Update Satus

export const updateApplicationStatus = async (req, res) => {
  let { statusAp } = req.body;
  const { id } = req.params;
  try {
    const application = await apply.findById(id);
    if (!application) {
      return res.status(404).json({
        message: "Id not found",
      });
    }

    const upStatus = await apply.findByIdAndUpdate(id, {
      statusAp: "approved",
    });

    const emailTemplate = {
      emailTo: application.pmail,
      subject: "Application Update for Your Child",
      message: `<h1> Dear ${application.pname}, </h1> <br/>  We have reviewed your child's application and are pleased to inform you that they have been confirmed for the next phase of the process. Kindly refer to the details outlined in this article: https://eaglespiritacademy.rw/admission. For further information, please follow the provided guidelines.
      <br />
      <br />
      <br />
      <p> Best regards,</p> <br />
      <p> David Andrew Wambuzi</p> <br />
      <p> Contact: +250 782 074 097</p> 

      `,
    };

    sendMail(emailTemplate);

    return res.status(200).json({
      statusbar: "success",
      message: "Student Approved well !!",
      data: upStatus,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Status Failed to be Updated",
      error: error.message,
    });
  }
};

// Get Alll
export const getAllAplicant = async (req, res) => {
  try {
    const getAll = await apply.find();
    return res.status(200).json({
      statusbar: "success",
      message: "All Applicant fetched successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Faliled to retrive all Applicant",
      error: error.message,
    });
  }
};
// getAll By id
export const getApplicantByID = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await apply.findById(id);
    if (!getId) {
      return res.status(201).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "Single Student Fetched Well",
      data: getId,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve Single Student",
      error: error.message,
    });
  }
};
// update
export const updateApplicant = async (req, res) => {
  let {
    pname,
    pnumber,
    pmail,
    pnationality,
    pcity,
    pstate,
    stName,
    stMiddleName,
    stLname,
    stProfile,
    stGender,
    stBirth,
    stMail,
    stNationality,
    stCity,
    stState,
  } = req.body;
  try {
    const { id } = req.params;
    const getOne = await apply.findById(id);
    if (!getOne) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updateApp = await apply.findByIdAndUpdate(
      id,
      {
        pname,
        pnumber,
        pmail,
        pnationality,
        pcity,
        pstate,
        stName,
        stMiddleName,
        stLname,
        stProfile,
        stGender,
        stBirth,
        stMail,
        stNationality,
        stCity,
        stState,
      },
      { new: true }
    );
    return res.status(201).json({
      statusbar: "Success",
      message: "Applicant Updated Well",
      data: updateApp,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update Applicant",
      error: error.message,
    });
  }
};

// delete
export const DeleteApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await apply.findById(id);
    if (!getId) {
      return res.status(201).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const deleteApp = await apply.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Applicant Deleted Well!",
      data: deleteApp,
    });
    return;
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Applicant",
      error: error.message,
    });
  }
};
