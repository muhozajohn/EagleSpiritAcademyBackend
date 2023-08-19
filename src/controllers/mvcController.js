// import contactUs from "../models/contactusModeles";
import mvcModel from "../models/MVCModel";

// Add Before Apply info

export const createMVC = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3 } = req.body;

    const updatedData = await mvcModel.create({
      field1,
      field2,
      field3,
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
export const getMVC = async (req, res) => {
  try {
    const read = await mvcModel.find();
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
export const updateMVC = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3 } = req.body;
    const updateBefore = await mvcModel.findById(id);
    if (!updateBefore) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await mvcModel.findByIdAndUpdate(id, {
      field1,
      field2,
      field3,
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
