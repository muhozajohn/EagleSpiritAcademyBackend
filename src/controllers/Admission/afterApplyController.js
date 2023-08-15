// import contactUs from "../models/contactusModeles";
import AfterApply from "../../models/Admission/AfterApplyModel";

// Add After Apply info

export const createAfter = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4, field5 } = req.body;

    const updatedData = await AfterApply.create({
      field,
      field2,
      field3,
      field4,
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
export const readAfter = async (req, res) => {
  try {
    const read = await AfterApply.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "After Application retrived Succefully",
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
export const updateAfter = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4, field5 } = req.body;
    const updateAfter = await AfterApply.findById(id);
    if (!updateAfter) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await AfterApply.findByIdAndUpdate(id, {
      field,
      field2,
      field3,
      field4,
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
