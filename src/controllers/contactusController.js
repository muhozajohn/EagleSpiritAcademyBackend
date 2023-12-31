import contactUs from "../models/contactusModeles";
import sendMail from "../helper/sendMail";
// Send message
export const createMessage = async (req, res) => {
  let { firstname, lastname, email, Tel, message } = req.body;
  try {
    const sendMessage = await contactUs.create({
      firstname,
      lastname,
      email,
      Tel,
      message,
    });
    return res.status(201).json({
      statusbar: "Success",
      message: "Message Sent Succefully",
      data: sendMessage,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Message Sent Failed",
      error: error.message,
    });
  }
};

// readMessage
export const readMessage = async (req, res) => {
  try {
    const read = await contactUs.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All message Retrived Succefully",
      data: read,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Read Message",
      error: error.message,
    });
  }
};
// readMessageBYId
export const readMessageBYId = async (req, res) => {
  try {
    const { id } = req.params;
    const read = await contactUs.findById(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Single Message Retrived Succefully",
      data: read,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Read Message",
      error: error.message,
    });
  }
};
// deleteMessage
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const read = await contactUs.findById(id);
    if (!read) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    await contactUs.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Message Deleted Succefully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Message",
      error: error.message,
    });
  }
};
// UpdateMessage
export const updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    let { firstname, lastname, email, Tel, message } = req.body;
    const updateMsg = await contactUs.findById(id);
    if (!updateMsg) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await contactUs.findByIdAndUpdate(id, {
      firstname,
      lastname,
      email,
      Tel,
      message,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Message Updated Succefully",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update Message",
      error: error.message,
    });
  }
};

// reply Message
export const replyMessage = async (req, res) => {
  let { reply } = req.body;
  let { id } = req.params;
  try {
    const findId = await contactUs.findById(id);
    if (!findId) {
      return res.status(404).json({
        message: "Failed to find contact Id",
      });
    }
    const replyM = await contactUs.findByIdAndUpdate(id, {
      reply,
    });

    const emailTemplate = {
      emailTo: findId.email,
      subject: "Message from Eagle Sprit Academy",
      message: reply,
    };

    sendMail(emailTemplate);
    return res.status(200).json({
      statusbar: "success",
      message: "Reply Sent successfully",
      data: replyM,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Failed to reply message",
      error: error.message,
    });
  }
};
