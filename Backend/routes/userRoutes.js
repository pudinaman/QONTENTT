const express =require("express");
const {createUser, getAllUsers, deleteUser, getUser, updateUser}=require("../controller/userController");
const router= express.Router();

router.route("/create").post(createUser);
router.route("/users").get(getAllUsers);
router.route("/delete").delete(deleteUser);
router.route("/user").get(getUser);
router.route("/update").post(updateUser);

module.exports=router;