import programModel from "../../models/about/programModel";

// Add Program Apply info

export const createProgram = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3} = req.body;

    const updatedData = await programModel.create({
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
export const getProgram = async (req, res) => {
  try {
    const read = await programModel.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "Program retrived Succefully",
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

// Update Program
export const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3} = req.body;
    const programData = await programModel.findById(id);
    if (!programData) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await programModel.findByIdAndUpdate(id, {
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