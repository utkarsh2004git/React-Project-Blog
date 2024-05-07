import User from "../models/user-model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};
