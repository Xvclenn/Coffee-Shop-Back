// routes/userRoutes.js
const express = require("express");
const {
    getAllUsers,
    getUserById,
    editUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/edit/:id", editUser);

module.exports = router;
