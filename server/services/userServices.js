import User from "../models/User";

const createUser = async (data) => {
    const user = await User.create(data);
    const obj = user.toObject();
    delete obj.password;
    delete obj.__v; //internal version key
    return obj;
};

t
const getAllUsers = async ({ page = 1, limit = 20, fields = '-password -__v' } = {}) => {
    const skip = (page - 1) * limit; //Ignore the first N documents and start from there
    //e.g if page=2 and limit=10, skip=10, so it will skip first 10 documents and return next 10 documents
    const [data, total] = await Promise.all([
        User.find({}, fields).sort({ createdAt: -1 }).skip(skip).limit(limit),
    //{} → no filter → get all users
//fields → select/exclude fields
/*
data → paginated users
total → total number of users in DB
*/ 
        User.countDocuments(),
    ]);
    return { data, meta: { total, page, limit } };
};

const getUserById = async (id, { fields = '-password -__v' } = {}) => {
    const user = await User.findById(id).select(fields);//i don't understand this part
    if (!user) throw new Error('User not found');
    return user;
};


const updateUser = async (data, id) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    }).select('-password -__v');
    if (!user) throw new Error('User does not exist');
    return user;
};


const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id).select('-password -__v');
    if (!user) throw new Error('User does not exist');
    return user;
};

export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};