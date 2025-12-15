import userServices from "../services/userServices.js";

const createUser = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}; 
const getAllUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const result = await userServices.getAllUsers({ page, limit });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.updateUser(req.body, id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await userServices.deleteUser(id);
    res.status(200).json({ message: "User deleted successfully", data: deleted });
  } catch (error) {
    next(error);
  }
};

export default{
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser
}