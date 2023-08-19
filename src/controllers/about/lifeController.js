import lifeModel from "../../models/about/lifeModels";

// Add Program Apply info

export const createLife = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3 } = req.body;

    const updatedData = await lifeModel.create({
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
export const getLife = async (req, res) => {
  try {
    const read = await lifeModel.find();
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
export const updateLife = async (req, res) => {
  try {
    const { id } = req.params;
    let { field1, field2, field3} = req.body;
    const lifeData = await lifeModel.findById(id);
    if (!lifeData) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updatedData = await lifeModel.findByIdAndUpdate(id, {
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
