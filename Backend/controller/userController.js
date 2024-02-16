const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

// Create User
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, age } = req.body;

    const user = await User.create({
        name,
        email,
        age
    });
    res.status(201).json({
        success: true,
        user
    });
});

// Read User
exports.getUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    res.status(200).json({
        success: true,
        user
    });
});

// Update User
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id;
    const { name, email, age } = req.body;

    let user = await User.findById(userId);

    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    user.name = name;
    user.email = email;
    user.age = age;

    await user.save();

    res.status(200).json({
        success: true,
        user
    });
});

// Delete User
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    await user.remove();

    res.status(200).json({
        success: true,
        message: 'User deleted successfully'
    });
});
// Get All Users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        count: users.length,
        users
    });
});

