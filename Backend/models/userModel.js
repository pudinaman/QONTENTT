const mongoose = require("mongoose");
const validator =require("validator");

const userSchema= new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      age: {
        type: Number,
        required: [true, "Please enter a valid age"],
        validate: {
            validator: Number.isInteger,
            message: "Age must be an integer",
        },
    },
})

module.exports=mongoose.model("User",userSchema);