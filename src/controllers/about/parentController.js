import parentModel from "../../models/about/parentModels";

// Add Program Apply info

export const createParent = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3 } = req.body;

    const updatedData = await parentModel.create({
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
export const getParent = async (req, res) => {
  try {
    const read = await parentModel.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "Panrent Corners info retrived Succefully",
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

// Update Parent
export const updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3 } = req.body;
    const parentModel = await parentModel.findById(id);
    if (!parentModel) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await parentModel.findByIdAndUpdate(id, {
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
