import event from "../models/eventsModels";
import { uploadToCloud } from "../helper/cloud";
import users from "../models/userModels";

// create Events
export const CreateEvent = async (req, res) => {
  let { title, eventImage, content, author } = req.body;
  console.log(req.users);
  try {
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeEvent = await event.create({
      title,
      eventImage: result?.secure_url || "profile.jpg",
      content,
      author: req.users.lastname,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Event Created Successfully",
      data: makeEvent,
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Events",
      error: error.message,
    });
  }
};
// getAllcreatedEvents

export const getAllEvent = async (req, res) => {
  try {
    const getAll = await event.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All Events Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve All Events",
      error: error.message,
    });
  }
};
// getSingle Events

export const getOneEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await event.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "Single Events Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve One Event",
      error: error.message,
    });
  }
};

// DeleteEvent
export const deleteEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await event.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    await event.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Single Event Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete One Events",
      error: error.message,
    });
  }
};

// updatEvents
export const UpdateeEvent = async (req, res) => {
  let { title, eventImage, content, author } = req.body;
  const { id } = req.params;
  try {
    const getId = await event.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
     let result;
     if (req.file) result = await uploadToCloud(req.file, res);
   const updatedData =  await event.findByIdAndUpdate(id, {
      title,
      eventImage: result?.secure_url || "profile.jpg",
      content,
      author,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Event updated Successfully",
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't update Events",
      error: error.message,
    });
  }
};
