// import contactUs from "../models/contactusModeles";
import beforeApply from "../../models/Admission/BeforeApplyModel";


// Add Before Apply info 

export const createBefore = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4, field5 } = req.body;
    
    const updatedData = await beforeApply.create({
      field,
      field2,
      field3,
      field4,
      field5,
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
export const readBefore = async (req, res) => {
  try {
    const read = await beforeApply.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "Before Application retrived Succefully",
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
export const updateBefore = async (req, res) => {
  try {
    const { id } = req.params;
    let { field, field2, field3, field4, field5 } = req.body;
    const updateBefore = await beforeApply.findById(id);
    if (!updateBefore) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await beforeApply.findByIdAndUpdate(id, {
      field,
      field2,
      field3,
      field4,
      field5,
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
