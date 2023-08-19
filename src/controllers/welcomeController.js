// import contactUs from "../models/contactusModeles";
import welcomeModel from "../models/welcomeModel";

// Add Before Apply info

export const createWelcome = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2 } = req.body;

    const updatedData = await welcomeModel.create({
      field1,
      field2,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Well Inserted ✅✅",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Insert ❌❌",
      error: error.message,
    });
  }
};

// retrieve Information
export const getWelcome = async (req, res) => {
  try {
    const read = await welcomeModel.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "MVC retrived Succefully",
      data: read,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't retreive data",
      error: error.message,
    });
  }
};

// UpdateMessage
export const updateWelcome = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2 } = req.body;
    const updateBefore = await welcomeModel.findById(id);
    if (!updateBefore) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await welcomeModel.findByIdAndUpdate(id, {
      field1,
      field2
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Well Updated ✅✅",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update ❌❌",
      error: error.message,
    });
  }
};
