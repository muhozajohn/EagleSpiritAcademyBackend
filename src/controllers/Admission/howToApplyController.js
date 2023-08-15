// import contactUs from "../models/contactusModeles";
import howToApply from "../../models/Admission/HowTo";

// Add Before Apply info

export const createHowToApply = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4 } = req.body;

    const updatedData = await howToApply.create({
      field,
      field2,
      field3,
      field4,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Well Created ✅✅",
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
export const readHowToApply = async (req, res) => {
  try {
    const read = await howToApply.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "How to  Apply info retrieved Successfully",
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
export const updateHowToApply = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4 } = req.body;
    const updateBefore = await howToApply.findById(id);
    if (!updateBefore) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await howToApply.findByIdAndUpdate(id, {
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
